import { v4 as uuid } from 'uuid';

function checkDuplicates(currentForm, label) {
  let dupes = 0;
  for (let field of currentForm.fields) {
    if (field.label === label) {
      dupes++;
      if (dupes > 1) {
        return true;
      }
    };
  }
  return false;
}

function setCurrentFormModified(currentForm) {
  if (!currentForm.modified) {
    currentForm.modified = true;
  }
}

const dashboardStateReducer = (state, action) => {
  const currentForm = { ...state.forms[state.currentForm] };
  let forms = [...state.forms];
  forms[state.currentForm] = currentForm;

  switch (action.type) {
    case 'FILTER_RECORDS': {
      const activeFilters = {
        ...state.filters,
        ...action.payload
      };
      return {
        ...state,
        activeFilters
      }
    }
    case 'POST_NEW_FORM': {
      forms.splice(
        state.currentForm,
        1,
        {
          ...action.payload,
          values: {}
        });
      return {
        ...state,
        forms
      }
    }
    case 'UPDATE_FORM': {
      forms.splice(
        state.currentForm,
        1,
        {
          ...action.payload.updatedForm,
          values: {}
        });
      return {
        ...state,
        forms
      }
    }
    case 'CREATE_NEW_FORM': {
      const newForms = state.newForms + 1
      const newForm = {
        values: {},
        fields: [],
        name: `New Form ${newForms}`,
        description: 'New Form Description'
      }

      forms.push(newForm);

      return {
        ...state,
        currentForm: forms.length - 1,
        forms,
        newForms
      }
    }
    case 'MOVE_FORM_FIELD': {
      currentForm.fields = [...currentForm.fields];

      const { index, direction } = action.payload;
      const tmp = currentForm.fields[index];
      if (direction === 'UP' && index > 0) {
        setCurrentFormModified(currentForm);
        currentForm.fields[index] = currentForm.fields[index - 1];
        currentForm.fields[index - 1] = tmp;
      }
      else if (direction === 'DOWN' && index < currentForm.fields.length - 1) {
        setCurrentFormModified(currentForm);
        currentForm.fields[index] = currentForm.fields[index + 1];
        currentForm.fields[index + 1] = tmp;
      }
      return {
        ...state,
        forms
      }
    }
    case 'UPDATE_MIN_MAX': {
      const { index, minmax } = action.payload;

      const fieldId = currentForm.fields[index].id;
      const fieldValue = currentForm.values[fieldId];

      if (
        minmax.min === currentForm.fields[index].max
        || minmax.max === currentForm.fields[index].min
      )
        return state;

      setCurrentFormModified(currentForm);

      currentForm.fields[index] = {
        ...currentForm.fields[index],
        ...minmax
      }
      if (minmax.min && fieldValue < minmax.min)
        currentForm.values = {
          ...currentForm.values,
          [fieldId]: minmax.min
        };
      else if (minmax.max && fieldValue > minmax.max)
        currentForm.values = {
          ...currentForm.values,
          [fieldId]: minmax.max
        };
      return {
        ...state,
        forms
      };
    }
    case 'UPDATE_FORM_NAME': {
      setCurrentFormModified(currentForm);
      currentForm.name = action.payload.name;
      return {
        ...state,
        forms
      };
    }
    case 'UPDATE_FORM_DESCRIPTION': {
      setCurrentFormModified(currentForm);

      currentForm.description = action.payload.description;
      return {
        ...state,
        forms
      }
    }
    case 'UPDATE_FIELD_NAME': {
      setCurrentFormModified(currentForm);

      const { index, label } = action.payload;

      const oldLabel = currentForm.fields[index].label;
      currentForm.fields = [
        ...currentForm.fields
      ];
      currentForm.fields[index] = {
        ...currentForm.fields[index],
        label
      }
      currentForm.values = {
        ...currentForm.values,
        [label]: currentForm.values[oldLabel],
      }

      currentForm.fields[index].duplicateError = checkDuplicates(
        currentForm,
        label
      );

      delete currentForm.values[oldLabel];

      return {
        ...state,
        forms
      };
    }
    case 'ADD_CURRENT_FORM_FIELD': {
      setCurrentFormModified(currentForm);

      const { type, label } = action.payload;
      const newField = {
        type,
        label: `New ${label} Field`,
        id: uuid()
      }

      if (type === 'range') {
        newField.min = 1;
        newField.max = 5;
      }

      currentForm.fields = [
        ...currentForm.fields,
        newField
      ]

      newField.duplicateError = checkDuplicates(currentForm, newField.label)

      return {
        ...state,
        forms
      };
    }
    case 'POPULATE_RECORDS_LIST': {
      return {
        ...state,
        records: action.payload,
        currentRecords: action.payload
      };
    }
    case 'UPDATE_FIELD_VALUE': {
      currentForm.values = {
        ...currentForm.values,
        ...action.payload
      }

      return {
        ...state,
        forms
      };
    }
    case 'SUBMIT_FORM': {
      currentForm.values = {};
      const records = [action.payload, ...state.records];
      return {
        ...state,
        forms,
        records
      };
    }
    case 'TOGGLE_DISPLAY_RECORD_FORM': {
      return {
        ...state,
        displayRecordForm: !state.displayRecordForm
      };
    }
    case 'POPULATE_FORMS_LIST': {
      action.payload.forEach(form => form.values = {});
      return {
        ...state,
        forms: action.payload,
        currentForm: 0
      };
    }
    case 'CHANGE_CURRENT_FORM': {
      return {
        ...state,
        currentForm: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export default dashboardStateReducer;