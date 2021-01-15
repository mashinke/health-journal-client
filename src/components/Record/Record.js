import React from 'react';
import { DeleteButton } from '../Button/Button';
import {
  StringDisplay,
  NumberDisplay,
  BooleanDisplay,
  RangeDisplay
} from '../DisplayField/DisplayField';
import {
  RecordFieldList,
  RecordListItem,
  RecordListItemHeader,
  RecordListItemDeleteButtonContainer,
  RecordListItemName,
  RecordListItemTime,
  RecordFieldListItemMeta
} from '../RecordDisplayComponents/RecordDisplayComponents';

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
      <RecordListItemHeader>
        <RecordFieldListItemMeta>
          <RecordListItemName>
            {props.name}
          </RecordListItemName>

          <RecordListItemTime>
            Recorded on: {new Date(props.created).toLocaleString()}
          </RecordListItemTime>
        </RecordFieldListItemMeta>
        <RecordListItemDeleteButtonContainer>
          <DeleteButton
            aria-label='delete record'
            onClick={() => props.handleDeleteRecord(props.id)}
          />
        </RecordListItemDeleteButtonContainer>
      </RecordListItemHeader>
      <RecordFieldList>
        {bodyFields}
      </RecordFieldList>
    </RecordListItem>
  )
}

export default Record;