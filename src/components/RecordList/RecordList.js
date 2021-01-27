import React from 'react';
import RecordApiService from '../../services/record-api-service';
import { RecordListContainer, RecordListHeading } from '../RecordDisplayComponents/RecordDisplayComponents';
import Record from '../Record/Record';

function RecordList(props) {
  const { records } = props;
  async function handleDeleteRecord(recordId) {
    try {
      await RecordApiService.deleteRecord(recordId);
      props.dispatch({
        type: 'DELETE_RECORD',
        payload: ({ recordId }),
      });
    } catch (error) { props.setApiError(error); }
  }

  const showRecords = records.map((record) => (
    <Record
      key={`record-${record.id}`}
      handleDeleteRecord={handleDeleteRecord}
      {...record}
    />
  ));
  return (
    <RecordListContainer>
      <RecordListHeading>
        Recorded Entries
      </RecordListHeading>
      {showRecords}
    </RecordListContainer>
  );
}

RecordList.defaultProps = {
  records: [],
};

export default RecordList;
