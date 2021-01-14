import React from 'react';
import { NewFormButton } from '../Button/Button';
import {
  SelectFormLabel,
  SelectFormContainer,
  SelectFormInteractiveContainer
} from '../RecordFormComponents/RecordFormComponents';

function SelectForm(props) {
  function handleCurrentFormChange(newCurrentForm) {
    props.dispatch(
      {
        type: 'CHANGE_CURRENT_FORM',
        payload: newCurrentForm
      }
    )
  }

  function handleCreateNewForm() {
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
  }

  let newFormCounter = 0;
  const selectOptions = props.forms.map((form, i) => (
    <option key={form.id || `new-form-${++newFormCounter}`} value={i}>{form.name}</option>
  ));

  return (
    <SelectFormContainer>
      <SelectFormLabel>
        What are you recording?
      </SelectFormLabel>
      <SelectFormInteractiveContainer>
        <select
          value={props.value}
          onChange={event =>
            handleCurrentFormChange(event.target.value)}
        >
          {selectOptions}
        </select>
        <NewFormButton onClick={() =>
          handleCreateNewForm()}
        />
      </SelectFormInteractiveContainer>
    </SelectFormContainer>
  )
};

export default SelectForm;