import React from 'react';
import RecordList from '../RecordList/RecordList';
import RecordFilterControls from '../RecordFilterControls/RecordFilterControls';
import Summary from '../Summary/Summary';
import {
  RecordDisplayContainer
} from '../RecordDisplayComponents/RecordDisplayComponents';

function RecordDisplay(props) {
  return (
    <>
      <RecordFilterControls
        forms={props.forms}
        dispatch={props.dispatch}
        filters={props.filters}
        showMultiSelect={props.showMultiSelect}
        showDatePicker={props.showDatePicker}
      />
      <RecordDisplayContainer>
        <Summary records={props.records} />
        <RecordList
          records={props.records}
          dispatch={props.dispatch}
          setApiError={props.setApiError}
        />
      </RecordDisplayContainer>
    </>
  )
}

export default RecordDisplay;