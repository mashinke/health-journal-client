import React, { useEffect, useReducer } from 'react';
import FormApiService from '../../services/form-api-service';
import RecordApiService from '../../services/record-api-service';
import Record from '../Record/Record';
import RecordForm from '../RecordForm/RecordForm';

function setCurrentFormModified(currentForm) {
  if (!currentForm.modified) {
    currentForm.modified = true;
  }
}

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
}

const dashboardStateReducer = (state, action) => {
  const currentForm = { ...state.forms[state.currentForm] };
  const forms = [...state.forms];
  forms[state.currentForm] = currentForm;

  switch (action.type) {
    case 'CREATE_NEW_FORM': {
      const newForm = {
        values: {},
        fields: [],
        name: 'New Form',
        description: 'New Form Description'
      }

      forms.push(newForm);

      return {
        ...state,
        currentForm: forms.length - 1,
        forms
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

      const fieldLabel = currentForm.fields[index].label;
      const fieldValue = currentForm.values[fieldLabel];

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
          [fieldLabel]: minmax.min
        };
      else if (minmax.max && fieldValue > minmax.max)
        currentForm.values = {
          ...currentForm.values,
          [fieldLabel]: minmax.max
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
        editing: true
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
        records: action.payload
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

function Dashboard(props) {
  const [dashboardState, dashboardDispatch] = useReducer(
    dashboardStateReducer,
    {
      forms: [],
      records: [],
      currentForm: {},
      displayRecordForm: false
    }
  )
  useEffect(() =>
    RecordApiService.getRecords()
      .then(res => {
        const action = {
          type: 'POPULATE_RECORDS_LIST',
          payload: res
        };
        dashboardDispatch(action);
      })
    , []);

  useEffect(() => {
    FormApiService.getForms()
      .then(res => {
        const action = {
          type: 'POPULATE_FORMS_LIST',
          payload: res
        };
        dashboardDispatch(action);
      });
  }, []);

  return (
    <section>
      <h2>Dashboard</h2>
      <button onClick={() =>
        dashboardDispatch({
          type: 'TOGGLE_DISPLAY_RECORD_FORM'
        })
      }>New record</button>
      {
        dashboardState.displayRecordForm
        && <RecordForm
          state={dashboardState}
          dispatch={dashboardDispatch}
        />
      }
      <h3>Your Records</h3>
      <ul>
        {
          dashboardState.records.map(record =>
            <Record key={record.id} {...record} />
          )
        }
      </ul>
    </section >
  )
}

export default Dashboard;