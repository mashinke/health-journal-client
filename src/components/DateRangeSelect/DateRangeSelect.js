import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

export default function DateRangeSelect(props) {
  const [toDate, setToDate] = useState(null)
  const [fromDate, setFromDate] = useState(null)

  function handleDateChange(type, value) {
    switch (type) {
      case 'FROM':
        if (toDate === null || value <= toDate) {
          setFromDate(value);
          props.dispatch({
            to: toDate,
            from: value
          });
        }
        break;
      case 'TO':
        if (fromDate === null || value >= fromDate) {
          setToDate(value);
          props.dispatch({
            to: value,
            from: fromDate
          })
        }
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <h4>Pick a date range</h4>
      <div>
        <label htmlFor='from-date'>From</label>
        <DatePicker
          value={fromDate}
          onChange={value => handleDateChange('FROM', value)}
        />
      </div>
      <div>
        <label htmlFor='fto-date'>To</label>
        <DatePicker
          value={toDate}
          onChange={value => handleDateChange('TO', value)}
        />
      </div>
    </div>
  )
}