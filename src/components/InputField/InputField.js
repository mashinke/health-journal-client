import React from 'react';

export function StringInput(props) {
  const label = props.label
  return (
    <div>
      {
        props.duplicateError && <p>Duplicate labels not allowed!</p>
      }
      <label htmlFor={props.label}>
        <input
          type='text'
          value={props.label}
          onChange={(event) => props.handleLabelEdit(event.target.value)}
        />
      </label>
      <input
        type='text'
        name={label}
        value={props.value}
        onChange={event => props.handleFieldValueChange(
          props.id,
          event.target.value
        )}
      />
    </div>
  )
}

export function NumberInput(props) {
  return (
    <div>
      {
        props.duplicateError && <p>Duplicate labels not allowed!</p>
      }
      <label htmlFor={props.label}>
        <input
          type='text'
          value={props.label}
          onChange={(event) => props.handleLabelEdit(event.target.value)}
        />
      </label>
      <input
        type='number'
        name={props.label}
        value={props.value}
        onChange={event => props.handleFieldValueChange(
          props.id,
          Number(event.target.value)
        )}
      />
    </div>
  )
}

export function BooleanInput(props) {
  return (
    <div>
      {
        props.duplicateError && <p>Duplicate labels not allowed!</p>
      }
      <label htmlFor={props.label}>
        <input
          type='text'
          value={props.label}
          onChange={(event) => props.handleLabelEdit(event.target.value)}
        />
      </label>
      <input
        type='checkbox'
        name={props.label}
        checked={props.value}
        onChange={event => props.handleFieldValueChange(
          props.id,
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
            props.id,
            Number(event.target.value)
          )}
        />
      </span>

    )
  }
  return (
    <fieldset>
      {
        props.duplicateError && <p>Duplicate labels not allowed!</p>
      }
      <legend>
        <input
          type='text'
          value={props.label}
          onChange={(event) => props.handleLabelEdit(event.target.value)}
        />
        Min:
          <input
          type='number'
          value={props.min}
          onChange={event =>
            props.handleMinMaxEdit(
              'min',
              Number(event.target.value)
            )}
        />
        Max:
          <input
          type='number'
          value={props.max}
          onChange={event =>
            props.handleMinMaxEdit(
              'max',
              Number(event.target.value)
            )}
        />
      </legend>
      <span>{radios}</span>
    </fieldset>
  )
}