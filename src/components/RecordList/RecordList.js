import React from 'react';
import RecordApiService from '../../services/record-api-service';
import { RecordListContainer, RecordListHeading } from '../RecordDisplayComponents/RecordDisplayComponents';
import Record from '../Record/Record';


export default function RecordList(props) {
  console.log(props.filter)
  async function handleDeleteRecord(recordId) {
    try {
      await RecordApiService.deleteRecord(recordId);
      props.dispatch({
        type: 'DELETE_RECORD',
        payload: ({ recordId })
      })
    } catch (error) { props.setApiError(error) }
  }

  const showRecords = props.records.map(record => (
    <Record
      key={record.id}
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
  )
}