import React from 'react';
import RecordList from '../RecordList/RecordList';
import RecordFilterControls from '../RecordFilterControls/RecordFilterControls';
import Summary from '../Summary/Summary';

function RecordDisplay(props) {
  return (
    <>
      <RecordFilterControls
        forms={props.forms}
        dispatch={props.dispatch}
        filters={props.filters}
      />
      <RecordList
        records={props.records}
        dispatch={props.dispatch}
        setApiError={props.setApiError}
      />
    </>
  )
}

export default RecordDisplay;