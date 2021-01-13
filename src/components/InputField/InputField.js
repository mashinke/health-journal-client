import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import TimePicker from 'react-time-picker';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { YesButton, NoButton } from '../Button/Button';
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
  FormFieldMinMaxContainer,
  RangeRadioContainer,
  FormFieldInputContainer
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
    <FormFieldBooleanInput>
      <YesButton
        checked={props.value}
        onClick={event => props.handleFieldValueChange(
          props.id,
          !!!props.value
        )}
      />
      <NoButton
        checked={props.value}
        onClick={event => props.handleFieldValueChange(
          props.id,
          !!!props.value
        )}
      />
    </FormFieldBooleanInput>
  )
}

function RangeInput(props) {
  const theme = useContext(ThemeContext);
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
        <FormFieldMinMaxContainer>
          <FormFieldMinMaxInput
            type='number'
            value={props.min}
            onChange={event =>
              props.handleMinMaxEdit(
                { min: Number(event.target.value) }
              )}
          />
          <IconContext.Provider
            value={
              {
                color: theme.primary.text,
                style: {
                  verticalAlign: 'middle',
                  fontSize: '1.25rem',
                  margin: 'auto 0'
                }
              }
            }
          >
            <RiArrowLeftSLine />
          </IconContext.Provider>
          <FormFieldMinMaxInput
            type='number'
            value={props.max}
            onChange={event =>
              props.handleMinMaxEdit(
                { max: Number(event.target.value) }
              )}
          />
        </FormFieldMinMaxContainer>
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