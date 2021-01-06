import React, { useEffect, useReducer } from 'react';
import FormApiService from '../../services/form-api-service';
import RecordApiService from '../../services/record-api-service';
import RecordDisplay from '../RecordDisplay/RecordDisplay';
import RecordFilterControls from '../RecordFilterControls/RecordFilterControls';
import RecordForm from '../RecordForm/RecordForm';

import dashboardStateReducer from './dashboardStateReducer';

const filterFunctions = {
  formId: (record, filter) => {
    if (filter.length === 0)
      return true;
    return filter.includes(record.formId)
  }
}

function filterCallBack(filters) {
  return function (record) {
    for (const [key, filter] of Object.entries(filters)) {
      if (!filterFunctions[key](record, filter))
        return false;
    }
    return true;
  }
}

function Dashboard(props) {
  const [dashboardState, dashboardDispatch] = useReducer(
    dashboardStateReducer,
    {
      forms: [],
      records: [],
      currentForm: null,
      newForms: 0,
      displayRecordForm: false,
      activeFilters: {
        formId: []
      }
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
    <main>
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
      <RecordFilterControls
        forms={dashboardState.forms}
        dispatch={dashboardDispatch}
      />
      <RecordDisplay
        records={dashboardState.records}
        filter={filterCallBack(dashboardState.activeFilters)}
      />
    </main>
  )
}

export default Dashboard;