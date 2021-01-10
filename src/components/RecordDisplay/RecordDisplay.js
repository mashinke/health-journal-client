import React from 'react';
import RecordApiService from '../../services/record-api-service';
import Record from '../Record/Record';



export default function RecordDisplay(props) {
  async function handleDeleteRecord(recordId) {
    try {
      await RecordApiService.deleteRecord(recordId);
      props.dispatch({
        type: 'DELETE_RECORD',
        payload: ({ recordId })
      })
    } catch (error) { props.setApiError(error) }
  }

  const showRecords = props.records.filter(props.filter).map(record => (
    <Record
      key={record.id}
      handleDeleteRecord={handleDeleteRecord}
      {...record}
    />
  ));
  return (
    <section>
      <h3>Selected Records</h3>
      <ul>
        {showRecords}
      </ul>
    </section>
  )
}