const dashboardStateReducer = (state, action) => {
  const currentForm = { ...state.forms[state.currentForm] };
  let forms = [...state.forms];
  forms[state.currentForm] = currentForm;

  switch (action.type) {
    case 'FILTER_RECORDS': {
      return {
        ...state,
        activeFilters: {
          ...state.activeFilters,
          ...action.payload
        }
      }
    }
    case 'UPDATE_CURRENT_FORM': {
      forms.splice(
        state.currentForm,
        1,
        {
          ...action.payload
        });
      return {
        ...state,
        forms
      }
    }
    case 'ADD_FORM': {
      forms.push(action.payload);

      return {
        ...state,
        currentForm: forms.length - 1,
        forms
      }
    }
    case 'POPULATE_RECORDS': {
      return {
        ...state,
        records: action.payload,
        currentRecords: action.payload
      };
    }
    case 'ADD_RECORD': {
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
    case 'POPULATE_FORMS': {
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