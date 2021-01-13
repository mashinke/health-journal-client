import React from 'react';
import TimePicker from 'react-time-picker';
import FormFieldRangeRadio from '../FormFieldRangeRadio/FormFieldRangeRadio';
import {
  FormFieldLabel,
  FormFieldNameInput,
  FormFieldTextInput,
  FormFieldNumberInput,
  FormFieldBooleanInput,
  FormFieldRangeInput,
  FormFieldRangeLegend,
  FormFieldRangeName,
  FormFieldMinMaxInput,
  FormFieldMinMaxLabel,
  RangeRadioContainer,
  FormFieldInputContainer,
  FormFieldLabelSpan
} from '../RecordFormComponents/RecordFormComponents';

function StringInput(props) {
  const label = props.label
  return (
    <FormFieldTextInput
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
    <FormFieldNumberInput
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
    <FormFieldBooleanInput
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
      <FormFieldRangeRadio
        key={i}
        label={i}
        parentId={props.id}
        id={`${props.id}-${i}`}
        value={i}
        checked={(i === props.value)}
        handleValueChange={props.handleFieldValueChange}
      />
    )
  }
  return (
    <FormFieldRangeInput>
      {
        props.duplicateError && <p>Duplicate labels not allowed!</p>
      }
      <FormFieldRangeLegend>
        <FormFieldRangeName
          type='text'
          value={props.label}
          onChange={(event) => props.handleLabelEdit(event.target.value)}
        />
        <FormFieldMinMaxLabel>Min:</FormFieldMinMaxLabel>
        <FormFieldMinMaxInput
          type='number'
          value={props.min}
          onChange={event =>
            props.handleMinMaxEdit(
              { min: Number(event.target.value) }
            )}
        />
        <FormFieldMinMaxLabel>Max:</FormFieldMinMaxLabel>
        <FormFieldMinMaxInput
          type='number'
          value={props.max}
          onChange={event =>
            props.handleMinMaxEdit(
              { max: Number(event.target.value) }
            )}
        />
      </FormFieldRangeLegend>
      <RangeRadioContainer>{radios}</RangeRadioContainer>
    </FormFieldRangeInput>
  )
}

function TimeInput(props) {
  return (
    <TimePicker
      onChange={value => props.handleFieldValueChange(
        props.id,
        value
      )}
      disableClock={true}
      value={props.value}
    />
  )
}

export default function InputField(props) {
  let field;
  switch (props.type) {
    case 'number':
      field = <NumberInput {...props} />;
      break;
    case 'boolean':
      field = <BooleanInput {...props} />;
      break;
    case 'string':
      field = <StringInput {...props} />;
      break;
    case 'range':
      field = <RangeInput {...props} />;
      break;
    case 'time':
      field = <TimeInput {...props} />;
      break;
    default: break;
  }
  return (
    <FormFieldInputContainer>
      {
        props.duplicateError && <p>Duplicate labels not allowed!</p>
      }
      {
        props.label === '' && <p>Field must have a label!</p>
      }
      {
        props.type !== 'range'
        &&
        <FormFieldLabel
          htmlFor={props.label}
        >
          <FormFieldNameInput
            type='text'
            value={props.label}
            onChange={(event) => props.handleLabelEdit(event.target.value)}
          />
        </FormFieldLabel>
      }
      {field}
    </FormFieldInputContainer>
  )
}