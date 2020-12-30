import React, { useEffect, useState } from 'react';
import RecordApiService from '../../services/record-api-service';
import Record from '../Record/Record';

function Dashboard(props) {
  const [records, setRecords] = useState([])
  useEffect(() => {
    RecordApiService.getRecords()
      .then(res => setRecords(res));
  }, []);

  return (
    <section>
      <h2>Dashboard</h2>
      <h3>Your Records</h3>
      <ul>
        {
          records.map(record =>
            <Record key={record.id} {...record} />
          )
        }
      </ul>
    </section>
  )
}

export default Dashboard;