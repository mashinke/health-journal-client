import React, { useContext, useEffect, useReducer } from 'react';
import FormApiService from '../../services/form-api-service';
import RecordApiService from '../../services/record-api-service';
import RecordDisplay from '../RecordDisplay/RecordDisplay';
import RecordFilterControls from '../RecordFilterControls/RecordFilterControls';
import RecordForm from '../RecordForm/RecordForm';
import UserContext from '../../contexts/UserContext';

import dashboardStateReducer from './dashboardStateReducer';

const filterFunctions = {
  formId: (record, filter) => {
    if (filter.length === 0)
      return true;
    return filter.includes(record.formId)
  },
  created: (record, filter) => {
    const dateCreated = new Date(record.created);
    if (filter.from === null || filter.to === null)
      return true;

    return (
      dateCreated >= filter.from
      && dateCreated < filter.to.setDate(filter.to.getDate() + 1)
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
        formId: []
      }
    }
  )
  useEffect(() =>
    RecordApiService.getRecords()
      .then(res => {
        const action = {
          type: 'POPULATE_RECORDS',
          payload: res
        };
        dashboardDispatch(action);
      }).catch(error => {
        switch (error.status) {
          case 401:
            userContext.processLogout();
            break;
          default:
            console.log(error.message);
        }
      })
    , [userContext]);

  useEffect(() => {
    FormApiService.getForms()
      .then(res => {
        const action = {
          type: 'POPULATE_FORMS',
          payload: res
        };
        dashboardDispatch(action);
      }).catch(error => {
        switch (error.status) {
          case 401:
            userContext.processLogout();
            break;
          default:
            console.log(error.message);
        }
      })
  }, [userContext]);

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