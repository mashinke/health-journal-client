import React from 'react';

/*

string
number
boolean
range

*/

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
  console.log('bool')
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
  console.log('range, value', props.value)
  const numbers = []
  for (let i = props.min; i <= props.max; i++) {
    if (i === props.value) numbers.push('\u25cf');
    else numbers.push('\u25cb')
  }
  console.log('range', numbers)
  return (
    <li>
      <span>{props.label}: </span>
      <span>{numbers}</span>
    </li>
  )
}