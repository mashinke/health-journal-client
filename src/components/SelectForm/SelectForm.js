import React from 'react';
import { NewFormButton } from '../Button/Button';
import {
  SelectFormLabel,
  SelectFormContainer,
  SelectFormInteractiveContainer
} from '../RecordFormComponents/RecordFormComponents';
import SelectSingle from '../SelectSingle/SelectSingle';

function SelectForm(props) {
  function handleCurrentFormChange({ value }) {
    console.log('val', value)
    if (value === 'NEW_FORM') {
      props.dispatch(
        {
          type: 'ADD_FORM',
          payload: {
            values: {},
            fields: [],
            name: '',
            description: ''
          }
        }
      )
    } else {
      props.dispatch(
        {
          type: 'CHANGE_CURRENT_FORM',
          payload: value
        }
      )
    }
  }

  const selectItems = props.forms.map((form, i) => (
    {
      value: i,
      label: form.name
    }
  ));

  selectItems.push({
    value: 'NEW_FORM',
    label: '<new form>'
  })

  return (
    <SelectFormContainer>
      <SelectSingle
        items={selectItems}
        handleSelectItem={handleCurrentFormChange}
        label='What are you recording?'
        StyledLabel={SelectFormLabel}
        buttonLabel={props.buttonLabel || 'New Form'}
      />
    </SelectFormContainer >
  )
};

export default SelectForm;