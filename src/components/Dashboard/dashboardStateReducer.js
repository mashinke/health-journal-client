const dashboardStateReducer = (state, action) => {
  const currentForm = { ...state.forms[state.currentForm] };
  const forms = [...state.forms];
  forms[state.currentForm] = currentForm;

  switch (action.type) {
    case 'TOGGLE_MULTI_SELECT': {
      return {
        ...state,
        showMultiSelect: !state.showMultiSelect,
        showDatePicker: false,
      };
    }
    case 'TOGGLE_DATE_PICKER': {
      return {
        ...state,
        showDatePicker: !state.showDatePicker,
        showMultiSelect: false,
      };
    }
    case 'DELETE_RECORD': {
      const records = state.records.filter((record) => record.id !== action.payload.recordId);
      return {
        ...state,
        records,
      };
    }
    case 'FILTER_RECORDS': {
      return {
        ...state,
        activeFilters: {
          ...state.activeFilters,
          ...action.payload,
        },
      };
    }
    case 'CLEAR_RESET_FORM': {
      const { id } = currentForm;
      const modifiedForms = state.modifiedForms.filter((form) => form.id !== id);
      return {
        ...state,
        modifiedForms,
      };
    }
    case 'UPDATE_CURRENT_FORM': {
      const { modified } = currentForm;
      const modifiedForms = [...state.modifiedForms];
      const oldForm = {};
      if (!modified) {
        Object.assign(oldForm, currentForm);
        oldForm.fields = currentForm.fields.map((field) => ({ ...field }));
        modifiedForms.push(oldForm);
      }

      forms.splice(
        state.currentForm,
        1,
        {
          ...action.payload,
        },
      );

      return {
        ...state,
        forms,
        modifiedForms,
      };
    }
    case 'ADD_FORM': {
      forms.push(action.payload);

      return {
        ...state,
        currentForm: forms.length - 1,
        forms,
      };
    }
    case 'POPULATE_RECORDS': {
      if (action.payload.length > 0) {
        return {
          ...state,
          recordListEmpty: false,
          records: action.payload,
          currentRecords: action.payload,
          recordsLoading: false,
        };
      }
      return {
        ...state,
        recordsLoading: false,
      };
    }
    case 'ADD_RECORD': {
      currentForm.values = {};
      const records = [action.payload, ...state.records];
      return {
        ...state,
        forms,
        records,
        recordListEmpty: false,
      };
    }
    case 'TOGGLE_DISPLAY_RECORD_LIST': {
      return {
        ...state,
        displayRecordList: !state.displayRecordList,
        displayRecordForm: false,
      };
    }
    case 'TOGGLE_DISPLAY_RECORD_FORM': {
      return {
        ...state,
        displayRecordForm: !state.displayRecordForm,
        displayRecordList: false,
      };
    }
    case 'POPULATE_FORMS': {
      const popForms = action.payload.map((form) => ({
        ...form,
        values: {},
      }));
      return {
        ...state,
        forms: popForms,
        currentForm: 0,
      };
    }
    case 'CHANGE_CURRENT_FORM': {
      return {
        ...state,
        currentForm: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default dashboardStateReducer;
