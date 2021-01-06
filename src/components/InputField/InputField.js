import React from 'react';

function StringInput(props) {
  const label = props.label
  return (
    <input
      type='text'
      name={label}
      value={props.value}
      onChange={event => props.handleFieldValueChange(
        props.id,
        event.target.value
      )}
    />
  )
}

function NumberInput(props) {
  return (
    <input
      type='number'
      name={props.label}
      value={props.value}
      onChange={event => props.handleFieldValueChange(
        props.id,
        Number(event.target.value)
      )}
    />
  )
}

function BooleanInput(props) {
  return (
    <input
      type='checkbox'
      name={props.label}
      checked={props.value}
      onChange={event => props.handleFieldValueChange(
        props.id,
        event.target.checked
      )}
    />
  )
}

function RangeInput(props) {
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
              { min: Number(event.target.value) }
            )}
        />
        Max:
          <input
          type='number'
          value={props.max}
          onChange={event =>
            props.handleMinMaxEdit(
              { max: Number(event.target.value) }
            )}
        />
      </legend>
      <span>{radios}</span>
    </fieldset>
  )
}

export default function InputField(props) {
  let field;
  switch (props.type) {
    case 'number':
      field = NumberInput;
      break;
    case 'boolean':
      field = BooleanInput;
      break;
    case 'string':
      field = StringInput;
      break;
    default:
      return <RangeInput {...props} />;
  }
  return (
    <div>
      {
        props.duplicateError && <p>Duplicate labels not allowed!</p>
      }
      {
        props.label === '' && <p>Field must have a label!</p>
      }
      <label htmlFor={props.label}>
        <input
          type='text'
          value={props.label}
          onChange={(event) => props.handleLabelEdit(event.target.value)}
        />
      </label>
      {field}
    </div>
  )
}