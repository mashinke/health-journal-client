import React from 'react';

export function StringInput(props) {
  const label = props.label
  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type='text'
        name={label}
        value={props.value}
        onChange={event => props.handleFieldValueChange(
          props.label,
          event.target.value
        )}
      />
    </div>
  )
}

export function NumberInput(props) {
  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type='number'
        name={props.label}
        value={props.value}
        onChange={event => props.handleFieldValueChange(
          props.label,
          Number(event.target.value)
        )}
      />
    </div>
  )
}

export function BooleanInput(props) {
  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type='checkbox'
        name={props.label}
        checked={props.value}
        onChange={event => props.handleFieldValueChange(
          props.label,
          event.target.checked
        )}
      />
    </div>
  )
}

export function RangeInput(props) {
  const radios = [];
  for (let i = props.min; i <= props.max; i++) {
    radios.push(
      <span key={i}>
        <label htmlFor={`${props.label}-${i}`}>{i}</label>
        <input
          type='radio'
          name={props.label}
          id={`${props.label}-${i}`}
          value={i}
          checked={(i === props.value)}
          onChange={event => props.handleFieldValueChange(
            props.label,
            Number(event.target.value)
          )}
        />
      </span>

    )
  }
  return (
    <fieldset>
      <legend>{props.label}: </legend>
      <span>{radios}</span>
    </fieldset>
  )
}