import React, { useContext, useEffect, useReducer, useState } from 'react';
import UserContext from '../../contexts/UserContext';
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
  },
  created: (record, filter) => {
    const dateCreated = new Date(record.created);
    const fromDate = new Date(filter.from);
    const toDate = new Date(filter.to)
    if (filter.from === null || filter.to === null)
      return true;

    return (
      dateCreated >= fromDate
      && dateCreated < toDate.setDate(filter.to.getDate() + 1)
    )
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
  const userContext = useContext(UserContext);
  const [dashboardState, dashboardDispatch] = useReducer(
    dashboardStateReducer,
    {
      forms: [],
      records: [],
      currentForm: null,
      displayRecordForm: false,
      activeFilters: {
        formId: [],
        created: {
          from: null,
          to: null
        }
      },
      apiError: false
    }
  )

  const [apiError, setApiError] = useState(null)

  useEffect(() =>
    RecordApiService.getRecords()
      .then(res => {
        const action = {
          type: 'POPULATE_RECORDS',
          payload: res
        };
        dashboardDispatch(action);
      }).catch(setApiError)
    , []);

  useEffect(() => {
    FormApiService.getForms()
      .then(res => {
        const action = {
          type: 'POPULATE_FORMS',
          payload: res
        };
        dashboardDispatch(action);
      }).catch(setApiError)
  }, []);

  if (apiError) {
    switch (apiError.status) {
      case 401:
        userContext.setError(apiError.message);
        userContext.processLogout();
        break;
      default:
        console.log(apiError.message)
    }
  }

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
          setApiError={setApiError}
        />
      }
      <RecordFilterControls
        forms={dashboardState.forms}
        dispatch={dashboardDispatch}
        filters={dashboardState.activeFilters}
      />
      <RecordDisplay
        records={dashboardState.records}
        filter={filterCallBack(dashboardState.activeFilters)}
      />
    </main>
  )
}

export default Dashboard;