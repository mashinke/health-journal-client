import React from 'react';
import styled from 'styled-components';
import { NewFormButton } from '../Button/Button';

const SelectFormLabel = styled.label`
  
`;

const SelectFormContainer = styled.div`
display: flex;
justify-content: space-evenly;
margin: 0 1rem;
border: 1px solid ${props => props.theme.secondary.dark};
border-radius: .5rem .5rem 0 0;
padding: .5rem 1rem .5rem .25rem;
background-color: ${props => props.theme.secondary.medium};
text-align: right;
color: ${props => props.theme.secondary.text};
`;

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
    console.log('ckk')
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
    </SelectFormContainer>
  )
};

export default SelectForm;