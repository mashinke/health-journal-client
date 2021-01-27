import React from 'react';
import RecordList from '../RecordList/RecordList';
import RecordFilterControls from '../RecordFilterControls/RecordFilterControls';
import Summary from '../Summary/Summary';
import {
  RecordDisplayContainer,
} from '../RecordDisplayComponents/RecordDisplayComponents';

function RecordDisplay(props) {
  const {
    forms,
    dispatch,
    filters,
    showMultiSelect,
    showDatePicker,
    records,
    setApiError,

  } = props;

  return (
    <>
      <RecordFilterControls
        forms={forms}
        dispatch={dispatch}
        filters={filters}
        showMultiSelect={showMultiSelect}
        showDatePicker={showDatePicker}
      />
      <RecordDisplayContainer>
        <Summary records={records} />
        <RecordList
          records={records}
          dispatch={dispatch}
          setApiError={setApiError}
        />
      </RecordDisplayContainer>
    </>
  );
}

RecordDisplay.defaultProps = {
  forms: [],
  records: [],
  filters: {
    forms: [],
    created: {},
  },
};

export default RecordDisplay;
