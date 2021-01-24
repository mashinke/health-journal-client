import React from 'react';
import {
  SelectFormLabel,
  SelectFormContainer,
} from '../RecordFormComponents/RecordFormComponents';
import SelectSingle from '../SelectSingle/SelectSingle';

function SelectForm(props) {
  const { forms, buttonLabel, dispatch } = props;
  function handleCurrentFormChange({ value }) {
    if (value === 'NEW_FORM') {
      dispatch(
        {
          type: 'ADD_FORM',
          payload: {
            values: {},
            fields: [],
            name: '',
            description: '',
          },
        },
      );
    } else {
      dispatch(
        {
          type: 'CHANGE_CURRENT_FORM',
          payload: value,
        },
      );
    }
  }

  const selectItems = forms.map((form, i) => (
    {
      value: i,
      label: form.name,
    }
  ));

  selectItems.push({
    value: 'NEW_FORM',
    label: '<new form>',
  });

  return (
    <SelectFormContainer>
      <SelectSingle
        items={selectItems}
        handleSelectItem={handleCurrentFormChange}
        label="What are you recording?"
        StyledLabel={SelectFormLabel}
        buttonLabel={buttonLabel || 'New Form'}
      />
    </SelectFormContainer>
  );
}

export default SelectForm;
