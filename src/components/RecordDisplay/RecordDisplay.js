import React from 'react';
import RecordList from '../RecordList/RecordList';
import RecordFilterControls from '../RecordFilterControls/RecordFilterControls';
import Summary from '../Summary/Summary';

function RecordDisplay(props) {
  return (
    <section>
      <RecordFilterControls
        forms={props.forms}
        dispatch={props.dispatch}
        filters={props.filters}
      />
      {
        // props.displayRecordList

          /* ? */ <RecordList
          records={props.records}
          dispatch={props.dispatch}
          setApiError={props.setApiError}
        />
        // : <Summary
        //   records={props.records}
        // />
      }
    </section>
  )
}

export default RecordDisplay;