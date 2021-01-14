import React from 'react';
import {
  StringDisplay,
  NumberDisplay,
  BooleanDisplay,
  RangeDisplay
} from '../DisplayField/DisplayField';
import { RecordFieldList, RecordListItem, RecordListItemDeleteButtonContainer, RecordListItemName, RecordListItemTime } from '../RecordListComponents/RecordListComponents';

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
      return <Field key={i} {...field} value={props.values[field.id]} />
    });
  return (
    <RecordListItem>
      <RecordListItemName>
        {props.name}
      </RecordListItemName>

      <RecordListItemTime>
        Recorded on: {new Date(props.created).toLocaleString()}
      </RecordListItemTime>
      <RecordFieldList>
        {bodyFields}
      </RecordFieldList>
      <RecordListItemDeleteButtonContainer>
        <button
          type='button'
          onClick={() => props.handleDeleteRecord(props.id)}
        >Delete Record</button>
      </RecordListItemDeleteButtonContainer>
    </RecordListItem>
  )
}

export default Record;