import React from 'react';
import {
  RecordFieldListItem,
} from '../RecordDisplayComponents/RecordDisplayComponents';

export function StringDisplay(props) {
  const { label, value } = props;
  return (
    <RecordFieldListItem>
      <span>
        {label}
        :
        {' '}
      </span>
      <span>{value}</span>
    </RecordFieldListItem>
  );
}

export function NumberDisplay(props) {
  const { label, value } = props;
  return (
    <RecordFieldListItem>
      <span>
        {label}
        :
        {' '}
      </span>
      <span>{value}</span>
    </RecordFieldListItem>
  );
}

export function BooleanDisplay(props) {
  const { label, value } = props;
  return (
    <RecordFieldListItem>
      <span>
        {label}
        :
        {' '}
      </span>
      <span>
        {
        value
          ? '\u2713'
          : '\u2717'
      }

      </span>
    </RecordFieldListItem>
  );
}

export function RangeDisplay(props) {
  const {
    min, max, value, label,
  } = props;
  const numbers = [];
  for (let i = min; i <= max; i += 1) {
    if (i === value) numbers.push('\u25cf');
    else numbers.push('\u25cb');
  }
  return (
    <RecordFieldListItem>
      <span>
        {label}
        :
        {' '}
      </span>
      <span>{numbers}</span>
    </RecordFieldListItem>
  );
}
