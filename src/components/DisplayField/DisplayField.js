import React from 'react';

export function StringDisplay(props) {
  return (
    <li>
      <span>{props.label}: </span>
      <span>{props.value}</span>
    </li>
  )
}

export function NumberDisplay(props) {
  return (
    <li>
      <span>{props.label}: </span>
      <span>{props.value}</span>
    </li>
  )
}

export function BooleanDisplay(props) {
  return (
    <li>
      <span>{props.label}: </span>
      <span>{
        props.value
          ? '\u2713'
          : '\u2717'
      }</span>
    </li>
  )
}

export function RangeDisplay(props) {
  const numbers = []
  for (let i = props.min; i <= props.max; i++) {
    if (i === props.value) numbers.push('\u25cf');
    else numbers.push('\u25cb')
  }
  return (
    <li>
      <span>{props.label}: </span>
      <span>{numbers}</span>
    </li>
  )
}