import React from 'react';
import {
  StringDisplay,
  NumberDisplay,
  BooleanDisplay,
  RangeDisplay
} from '../Field/Field';

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
          console.log('range, value', props)
          Field = RangeDisplay;
          break;
        default:
          Field = StringDisplay;
          break;
      }
      return <Field key={i} {...field} value={props.values[field.label]} />
    });
  console.log(props.body)
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