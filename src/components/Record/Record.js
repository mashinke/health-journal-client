import React from 'react';
import { DeleteButton } from '../Button/Button';
import {
  StringDisplay,
  NumberDisplay,
  BooleanDisplay,
  RangeDisplay,
} from '../DisplayField/DisplayField';
import {
  RecordFieldList,
  RecordListItem,
  RecordListItemHeader,
  RecordListItemDeleteButtonContainer,
  RecordListItemName,
  RecordListItemTime,
  RecordFieldListItemMeta,
} from '../RecordDisplayComponents/RecordDisplayComponents';

function Record(props) {
  const {
    id, fields, values, name, created, handleDeleteRecord,
  } = props;
  const bodyFields = fields.map(
    (field) => {
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
      return <Field key={`field-${field.id}`} {...field} value={values[field.id]} />;
    },
  );
  return (
    <RecordListItem>
      <RecordListItemHeader>
        <RecordFieldListItemMeta>
          <RecordListItemName>
            {name}
          </RecordListItemName>

          <RecordListItemTime>
            Recorded on:
            {' '}
            {new Date(created).toLocaleString()}
          </RecordListItemTime>
        </RecordFieldListItemMeta>
        <RecordListItemDeleteButtonContainer>
          <DeleteButton
            aria-label="delete record"
            onClick={() => handleDeleteRecord(id)}
          />
        </RecordListItemDeleteButtonContainer>
      </RecordListItemHeader>
      <RecordFieldList>
        {bodyFields}
      </RecordFieldList>
    </RecordListItem>
  );
}

export default Record;
