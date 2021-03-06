import React, {
  useContext, useEffect, useReducer, useState,
} from 'react';
import UserContext from '../../contexts/UserContext';
import FormApiService from '../../services/form-api-service';
import RecordApiService from '../../services/record-api-service';
import Header from '../Header/Header';
import RecordDisplay from '../RecordDisplay/RecordDisplay';
import RecordForm from '../RecordForm/RecordForm';

import dashboardStateReducer from './dashboardStateReducer';
import {
  DashboardLoading,
  DashboardMain,
  DashboardWelcome,
} from '../DashboardComponents/DashboardComponents';

const filterFunctions = {
  forms: (record, filter) => {
    if (filter.length === 0) return true;
    const result = filter.map((item) => item.id).includes(record.formId);
    return result;
  },
  created: (record, filter) => {
    const dateCreated = new Date(record.created);
    const fromDate = new Date(filter.from);
    const toDate = new Date(filter.to);
    if (filter.from === null || filter.to === null) return true;

    return (
      dateCreated >= fromDate
      && dateCreated < toDate.setDate(filter.to.getDate() + 1)
    );
  },
};

function filterCallBack(filters) {
  // eslint-disable-next-line func-names
  return function (record) {
    let result = true;
    // for (const [key, filter] of Object.entries(filters))
    Object.entries(filters).forEach(([key, filter]) => {
      if (!filterFunctions[key](record, filter)) result = false;
    });
    return result;
  };
}

function Dashboard() {
  const userContext = useContext(UserContext);
  const [dashboardState, dashboardDispatch] = useReducer(
    dashboardStateReducer,
    {
      forms: [
        {
          name: '',
          fields: [],
          values: {},
          description: '',
        },
      ],
      modifiedForms: [],
      records: [],
      currentForm: 0,
      displayRecordForm: false,
      displayRecordList: false,
      showMultiSelect: false,
      showDatePicker: false,
      recordListEmpty: true,
      recordsLoading: true,
      activeFilters: {
        forms: [],
        created: {
          from: null,
          to: null,
        },
      },
      apiError: false,
    },
  );

  const [apiError, setApiError] = useState(null);

  useEffect(() => RecordApiService.getRecords()
    .then((res) => {
      const action = {
        type: 'POPULATE_RECORDS',
        payload: res,
      };
      dashboardDispatch(action);
    }).catch(setApiError),
  []);

  useEffect(() => {
    FormApiService.getForms()
      .then((res) => {
        if (res.length > 0) {
          const action = {
            type: 'POPULATE_FORMS',
            payload: res,
          };
          dashboardDispatch(action);
        }
      }).catch(setApiError);
  }, []);

  if (apiError) {
    switch (apiError.status) {
      case 401:
        userContext.setError(apiError.message);
        userContext.processLogout();
        break;
      default:
    }
  }

  function handleNewRecordClick() {
    dashboardDispatch({
      type: 'TOGGLE_DISPLAY_RECORD_FORM',
    });
  }

  function handleDisplayRecordListClick() {
    dashboardDispatch({
      type: 'TOGGLE_DISPLAY_RECORD_LIST',
    });
  }

  const filteredRecords = dashboardState.records
    .filter(filterCallBack(dashboardState.activeFilters));

  let dashboardContents;

  if (dashboardState.recordsLoading) {
    dashboardContents = <DashboardLoading />;
  } else if (dashboardState.recordListEmpty && !dashboardState.displayRecordForm) {
    dashboardContents = (
      <DashboardWelcome>
        <h2>Welcome to Health Journal!</h2>
        <p>Click on the plus icon to create your first entry.</p>
      </DashboardWelcome>
    );
  } else {
    dashboardContents = dashboardState.displayRecordForm
      ? (
        <RecordForm
          state={dashboardState}
          dispatch={dashboardDispatch}
          setApiError={setApiError}
        />
      )
      : (
        <RecordDisplay
          dispatch={dashboardDispatch}
          forms={dashboardState.forms}
          filters={dashboardState.activeFilters}
          records={filteredRecords}
          setApiError={setApiError}
          showDatePicker={dashboardState.showDatePicker}
          showMultiSelect={dashboardState.showMultiSelect}
          displayRecordList={dashboardState.displayRecordList}
        />
      );
  }

  return (
    <>
      <Header
        newRecord={handleNewRecordClick}
        listRecords={handleDisplayRecordListClick}
      />

      <DashboardMain>
        {dashboardContents}
      </DashboardMain>
    </>
  );
}

export default Dashboard;
