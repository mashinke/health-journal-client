import React from 'react';
import Record from '../Record/Record';

export default function RecordDisplay(props) {
  const showRecords = props.records.filter(props.filter).map(record => (
    <Record
      key={record.id}
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