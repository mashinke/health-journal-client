import React, { useContext, useEffect, useReducer, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import FormApiService from '../../services/form-api-service';
import RecordApiService from '../../services/record-api-service';
import Header from '../Header/Header';
import Summary from '../Summary/Summary';
import RecordDisplay from '../RecordDisplay/RecordDisplay';
import RecordFilterControls from '../RecordFilterControls/RecordFilterControls';
import RecordForm from '../RecordForm/RecordForm';

import dashboardStateReducer from './dashboardStateReducer';


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

  return (
    <>
      <Header
        newRecord={handleNewRecordClick}
        listRecords={handleDisplayRecordListClick}
      />

      <main>
        <h2>Dashboard</h2>
        {
          !(
            dashboardState.displayRecordForm
            || dashboardState.displayRecordList
          )
          && <Summary />

        }
        {
          dashboardState.displayRecordForm
          && <RecordForm
            state={dashboardState}
            dispatch={dashboardDispatch}
            setApiError={setApiError}
          />
        }
        {
          dashboardState.displayRecordList
          && <RecordDisplay
            dispatch={dashboardDispatch}
            forms={dashboardState.forms}
            filters={dashboardState.activeFilters}
            records={dashboardState.records}
            setApiError={setApiError}
          />
        }
      </main>
    </>
  )
}

export default Dashboard;