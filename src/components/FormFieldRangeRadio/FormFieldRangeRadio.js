import React from 'react';
import { RadioInputContainer } from '../RecordFormComponents/RecordFormComponents'
import { RangeNumberButton } from '../Button/Button';

function FormFieldRangeRadio(props) {
  return (
    <RadioInputContainer>
      <RangeNumberButton
        name={props.parentId}
        id={props.id}
        value={props.value}
        checked={props.checked}
        onClick={() => props.handleValueChange(
          props.parentId,
          props.value
        )}
      />
    </RadioInputContainer>
  )
}

export default FormFieldRangeRadio;