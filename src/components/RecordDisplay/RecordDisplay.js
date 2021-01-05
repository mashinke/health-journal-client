import React from 'react';
import Record from '../Record/Record';

export default function RecordDisplay(props) {
  return (
    <section>
      <h3>Selected Records</h3>
      <ul>
        {
          props.selectedRecords.map(record => (
            <Record
              key={record.id}
              {...record}
            />
          ))
        }
      </ul>
    </section>
  )
}