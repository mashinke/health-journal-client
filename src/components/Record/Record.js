import React from 'react';
import {
  StringDisplay,
  NumberDisplay,
  BooleanDisplay,
  RangeDisplay
} from '../DisplayField/DisplayField';

function Record(props) {
  const bodyFields = props.fields.map(
    (field, i) => {
      let Field;
      switch (field.type) {
        case 'number':
          Field = NumberDisplay;
          break;
        case 'boolean':
          Field = BooleanDisplay;
          break;
        case 'range':
          Field = RangeDisplay;
          break;
        default:
          Field = StringDisplay;
          break;
      }
      console.log(field.id)
      return <Field key={i} {...field} value={props.values[field.id]} />
    });
  return (
    <li>
      <h4>{props.name}</h4>
      <p>Recorded on: {new Date(props.created).toLocaleString()}</p>
      <ul>
        {bodyFields}
      </ul>
    </li>
  )
}

export default Record;