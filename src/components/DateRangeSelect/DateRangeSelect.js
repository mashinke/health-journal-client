import React from 'react';
import DatePicker from 'react-date-picker';

export default function DateRangeSelect(props) {
  const { fromDate, toDate, dispatch } = props

  function handleDateChange(type, value) {
    switch (type) {
      case 'FROM':
        if (toDate === null || value <= toDate) {
          dispatch({
            to: toDate,
            from: value
          });
        }
        break;
      case 'TO':
        if (fromDate === null || value >= fromDate) {
          dispatch({
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
      <div>
        <label htmlFor='from-date'>From</label>
        <DatePicker
          value={fromDate}
          maxDate={new Date()}
          onChange={value => handleDateChange('FROM', value)}
        />
      </div>
      <div>
        <label htmlFor='fto-date'>To</label>
        <DatePicker
          value={toDate}
          maxDate={new Date()}
          onChange={value => handleDateChange('TO', value)}
        />
      </div>
    </div>
  )
}