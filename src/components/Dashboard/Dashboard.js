import React, { useEffect, useReducer } from 'react';
import FormApiService from '../../services/form-api-service';
import RecordApiService from '../../services/record-api-service';
import Record from '../Record/Record';
import RecordForm from '../RecordForm/RecordForm';

const dashboardStateReducer = (state, action) => {
  const forms = [...state.forms];
  switch (action.type) {
    case 'POPULATE_RECORDS_LIST':
      return {
        ...state,
        records: action.payload
      }
    case 'UPDATE_FIELD_VALUE':
      forms[state.currentForm] = {
        ...forms[state.currentForm],
        values: {
          ...forms[state.currentForm].values,
          ...action.payload
        }
      }
      return {
        ...state,
        forms
      };
    case 'SUBMIT_FORM':
      forms[state.currentForm] = {
        ...forms[state.currentForm],
        values: {}
      }
      const records = [action.payload, ...state.records];
      return {
        ...state,
        forms,
        records
      }
    case 'TOGGLE_DISPLAY_RECORD_FORM':
      return { ...state, displayRecordForm: !state.displayRecordForm }
    case 'POPULATE_FORMS_LIST':
      action.payload.forEach(form => form.values = {});
      return {
        ...state,
        forms: action.payload,
        currentForm: 0
      }
    case 'CHANGE_CURRENT_FORM':
      console.log('change current form', action.payload)
      return {
        ...state,
        currentForm: action.payload
      };
    default:
      return state;
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