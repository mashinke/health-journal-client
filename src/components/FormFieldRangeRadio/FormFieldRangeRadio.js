import React from 'react';
import { RadioInputContainer } from '../RecordFormComponents/RecordFormComponents';
import { RangeNumberButton } from '../Button/Button';

function FormFieldRangeRadio(props) {
  const {
    parentId, id, value, checked, handleValueChange,
  } = props;
  return (
    <RadioInputContainer>
      <RangeNumberButton
        name={parentId}
        id={id}
        value={value}
        checked={checked}
        onClick={() => handleValueChange(
          parentId,
          value,
        )}
      />
    </RadioInputContainer>
  );
}

export default FormFieldRangeRadio;
