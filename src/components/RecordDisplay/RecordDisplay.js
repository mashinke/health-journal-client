import React from 'react';
import RecordList from '../RecordList/RecordList';
import RecordFilterControls from '../RecordFilterControls/RecordFilterControls';
import DashboardViewTitle from '../DashboardViewTitle/DashboardViewTitle';
import Summary from '../Summary/Summary';

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

function RecordDisplay(props) {
  return (
    <section>
      <RecordFilterControls
        forms={props.forms}
        dispatch={props.dispatch}
        filters={props.filters}
      />
      {
        props.displayRecordList

          ? <RecordList
            records={props.records}
            dispatch={props.dispatch}
            filter={filterCallBack(props.filters)}
            setApiError={props.setApiError}
          />
          : <Summary />
      }
    </section>
  )
}

export default RecordDisplay;