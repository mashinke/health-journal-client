import React from 'react';
import Record from '../Record/Record';



export default function RecordDisplay(props) {
  function handleDeleteRecord(recordId) {
    console.log('delete record')
    props.dispatch({
      type: 'DELETE_RECORD',
      payload: ({ recordId })
    })
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