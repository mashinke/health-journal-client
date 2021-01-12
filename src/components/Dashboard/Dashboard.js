import React, { useContext, useEffect, useReducer, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import FormApiService from '../../services/form-api-service';
import RecordApiService from '../../services/record-api-service';
import Header from '../Header/Header';
import Summary from '../Summary/Summary';
import RecordDisplay from '../RecordDisplay/RecordDisplay';
import RecordForm from '../RecordForm/RecordForm';
import DashboardMain from '../DashboardMain/DashboardMain';

import dashboardStateReducer from './dashboardStateReducer';


const filterFunctions = {
  forms: (record, filter) => {
    if (filter.length === 0)
      return true;
    return filter.map(item => item.id).includes(record.formId)
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
      console.log(key)
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
      modifiedForms: [],
      records: [],
      currentForm: null,
      displayRecordForm: false,
      displayRecordList: false,
      activeFilters: {
        forms: [],
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

  function handleNewRecordClick() {
    dashboardDispatch({
      type: 'TOGGLE_DISPLAY_RECORD_FORM'
    })
  };

  function handleDisplayRecordListClick() {
    dashboardDispatch({
      type: 'TOGGLE_DISPLAY_RECORD_LIST'
    })
  };

  const filteredRecords = dashboardState.records
    .filter(filterCallBack(dashboardState.activeFilters));

  return (
    <>
      <Header
        newRecord={handleNewRecordClick}
        listRecords={handleDisplayRecordListClick}
      />

      <DashboardMain>
        {
          dashboardState.displayRecordForm
            ? <RecordForm
              state={dashboardState}
              dispatch={dashboardDispatch}
              setApiError={setApiError}
            />
            : <RecordDisplay
              dispatch={dashboardDispatch}
              forms={dashboardState.forms}
              filters={dashboardState.activeFilters}
              records={filteredRecords}
              setApiError={setApiError}
              displayRecordList={dashboardState.displayRecordList}
            />
        }
      </DashboardMain>
    </>
  )
}

export default Dashboard;