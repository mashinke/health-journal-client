import React from 'react';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import { DateRangeSelectContainer, DateRangeSelectInputContainer, DateRangeSelectInputLabel, DateRangeSelectLabel } from '../DateSelectComponents/DateSelectComponents';
import './DateRangeSelect.css';

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
    <DateRangeSelectContainer id={props.id}>
      {props.fromDate && props.toDate
        && <div>{props.fromDate.toString()}{props.toDate.toString()}</div>}
      {
        props.show
        && <>
          <DateRangeSelectLabel htmlFor={props.id}>
            {props.label}
          </DateRangeSelectLabel>
          <DateRangeSelectInputContainer>
            <DateRangeSelectInputLabel htmlFor='from-date'>
              From:
        </DateRangeSelectInputLabel>
            <DatePicker
              value={fromDate}
              maxDate={new Date()}
              onChange={value => handleDateChange('FROM', value)}
            />
            <DateRangeSelectInputLabel htmlFor='to-date'>
              To:
        </DateRangeSelectInputLabel>
            <DatePicker
              value={toDate}
              maxDate={new Date()}
              onChange={value => handleDateChange('TO', value)}
            />
          </DateRangeSelectInputContainer>
        </>
      }
    </DateRangeSelectContainer>
  )
}