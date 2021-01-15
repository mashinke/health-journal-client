import React from 'react';
import {
  RecordFieldListItem
} from '../RecordDisplayComponents/RecordDisplayComponents';
export function StringDisplay(props) {
  return (
    <RecordFieldListItem>
      <span>{props.label}: </span>
      <span>{props.value}</span>
    </RecordFieldListItem>
  )
}

export function NumberDisplay(props) {
  return (
    <RecordFieldListItem>
      <span>{props.label}: </span>
      <span>{props.value}</span>
    </RecordFieldListItem>
  )
}

export function BooleanDisplay(props) {
  return (
    <RecordFieldListItem>
      <span>{props.label}: </span>
      <span>{
        props.value
          ? '\u2713'
          : '\u2717'
      }</span>
    </RecordFieldListItem>
  )
}

export function RangeDisplay(props) {
  const numbers = []
  for (let i = props.min; i <= props.max; i++) {
    if (i === props.value) numbers.push('\u25cf');
    else numbers.push('\u25cb')
  }
  return (
    <RecordFieldListItem>
      <span>{props.label}: </span>
      <span>{numbers}</span>
    </RecordFieldListItem>
  )
}