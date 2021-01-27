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
  FormFieldInputContainer,
  FieldValidationError,
  MinMaxValidationError,
} from '../RecordFormComponents/RecordFormComponents';
import ScreenReaderText from '../ScreenReaderText/ScreenReaderText';

function StringInput(props) {
  const { label, id, value } = props;
  return (
    <FormFieldTextInput
      id={id}
      name={label}
      value={value}
      onChange={(event) => props.handleFieldValueChange(
        id,
        event.target.value,
      )}
    />
  );
}

function NumberInput(props) {
  const {
    id, label, value, handleFieldValueChange,
  } = props;
  return (
    <FormFieldNumberInput
      id={id}
      name={label}
      value={value}
      onChange={(event) => handleFieldValueChange(
        id,
        Number(event.target.value),
      )}
    />
  );
}

function BooleanInput(props) {
  const { id, value, handleFieldValueChange } = props;
  return (
    <FormFieldBooleanInput
      id={id}
    >
      <YesButton
        checked={value}
        onClick={() => handleFieldValueChange(
          id,
          !value,
        )}
      />
      <NoButton
        checked={value}
        onClick={() => handleFieldValueChange(
          id,
          !props.value,
        )}
      />
    </FormFieldBooleanInput>
  );
}

function RangeInput(props) {
  const {
    value,
    min,
    max,
    id,
    duplicateError,
    minmaxError,
    label,
    handleLabelEdit,
    handleMinMaxEdit,
    handleFieldValueChange,
  } = props;
  const theme = useContext(ThemeContext);
  const radios = [];
  for (let i = min; i <= max; i += 1) {
    radios.push(
      <FormFieldRangeRadio
        key={i}
        label={i}
        parentId={id}
        id={`${id}-${i}`}
        value={i}
        checked={(i === value)}
        handleValueChange={handleFieldValueChange}
      />,
    );
  }
  return (
    <FormFieldRangeInput
      id={id}
    >
      <FormFieldRangeLegend>
        <FormFieldRangeName
          id={`${id}-label`}
          aria-invalid={(duplicateError || label === '')}
          type="text"
          title="edit field name"
          value={label}
          onChange={(event) => handleLabelEdit(event.target.value)}
        />
        <FormFieldMinMaxContainer>
          <FormFieldMinMaxInput
            title="range minimum"
            type="number"
            value={min}
            onChange={(event) => handleMinMaxEdit(
              { min: Number(event.target.value) },
            )}
          />
          <IconContext.Provider
            value={
              {
                color: theme.primary.text,
                style: {
                  verticalAlign: 'middle',
                  fontSize: '1.25rem',
                  margin: 'auto 0',
                },
              }
            }
          >
            <RiArrowLeftSLine />
          </IconContext.Provider>
          <FormFieldMinMaxInput
            title="range maximum"
            type="number"
            value={max}
            onChange={(event) => handleMinMaxEdit(
              { max: Number(event.target.value) },
            )}
          />
        </FormFieldMinMaxContainer>
      </FormFieldRangeLegend>
      <RangeRadioContainer>
        {minmaxError
          ? <MinMaxValidationError>min/max values invalid</MinMaxValidationError>
          : radios}
      </RangeRadioContainer>
    </FormFieldRangeInput>
  );
}

function TimeInput(props) {
  const { value, id, handleFieldValueChange } = props;
  return (
    <TimePicker
      onChange={(newValue) => handleFieldValueChange(
        id,
        newValue,
      )}
      disableClock
      value={value}
    />
  );
}

function InputField(props) {
  const {
    type,
    label,
    id,
    duplicateError,
    handleLabelEdit,

  } = props;
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
        type !== 'range'
        && (
        <FormFieldLabel
          htmlFor={id}
        >
          <FormFieldNameInput
            id={`${id}-label`}
            aria-invalid={(duplicateError || label === '')}
            title="edit field name"
            type="text"
            value={label}
            onChange={(event) => handleLabelEdit(event.target.value)}
          />
          <ScreenReaderText>{label}</ScreenReaderText>
        </FormFieldLabel>
        )
      }
      {field}
      {
        duplicateError
        && (
        <FieldValidationError
          aria-errormessage={id}
        >
          Duplicate labels not allowed
        </FieldValidationError>
        )
      }
      {
        label === ''
        && (
        <FieldValidationError
          aria-errormessage={id}
        >
          Please enter a label
        </FieldValidationError>
        )
      }
    </FormFieldInputContainer>
  );
}

export default InputField;
