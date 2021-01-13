import React from 'react';
import { RadioInputContainer, FormFieldRangeRadioInput, FormFieldRangeRadioLabel } from '../RecordFormComponents/RecordFormComponents'

function FormFieldRangeRadio(props) {
  return (
    <RadioInputContainer>
      <FormFieldRangeRadioLabel>
        {props.label}
      </FormFieldRangeRadioLabel>
      <FormFieldRangeRadioInput
        name={props.parentLabel}
        id={props.id}
        value={props.value}
        checked={props.checked}
        onChange={event => props.handleValueChange(
          props.parentId,
          Number(event.target.value)
        )}
      />
    </RadioInputContainer>
  )
}

export default FormFieldRangeRadio;