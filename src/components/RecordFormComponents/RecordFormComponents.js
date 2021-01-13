import styled from 'styled-components';


export const SelectFormLabel = styled.label`
  padding: .25rem 0;
`;

export const SelectFormContainer = styled.div`
  margin: 0 0 .5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 1px solid ${props => props.theme.secondary.dark};
  border-radius: .5rem .5rem;
  padding: .25rem 1rem .25rem .25rem;
  background-color: ${props => props.theme.secondary.medium};
  text-align: right;
  color: ${props => props.theme.secondary.text};
`;

export const SelectFormInteractiveContainer = styled.div`
  padding: .25rem 0;
`;

export const FormNameContainer = styled.h2`

  justify-content: space-evenly;
  margin: 0;
`;

export const FormNameLabel = styled.label``;

export const FormNameInput = styled.input`
  font-size: inherit;
  border: none;
  color: inherit;
  background-color: ${props => props.theme.primary.light};
  margin: 0 0 0 1rem;
  width: calc(100% - 1rem);
  transition: 200ms all;
  :hover {
    background-color: ${props => props.theme.primary.medium};
  }
`;

export const FormDescriptionLabel = styled.label`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const FormDescriptionInput = styled.textarea`
  font-size: inherit;
  font-family: inherit;
  background: inherit;
  border: none;
  color: inherit;
  margin: 0 0 0 .5rem;
  width: 100%;
  transition: 200ms all;
  :hover {
    background-color: ${props => props.theme.primary.medium};
  }
`;

export const RecordFormContainer = styled.form`
  margin: 0 1rem;
`;

export const FormFieldContainer = styled.div`

`;

export const FormFieldLabel = styled.label`

`;

export const FormFieldTextInput = styled.input
  .attrs({ type: 'text' })`
  
  `;

export const FormFieldNumberInput = styled.input
  .attrs({ type: 'number' })`
  
  `;

export const FormFieldBooleanInput = styled.input
  .attrs({ type: 'checkbox' })`

`;

export const FormFieldRangeInput = styled.fieldset`
  
`;

export const FormFieldRangeLegend = styled.legend`

`;

export const FormFieldRangeName = styled.input
  .attrs({ type: 'text' })`
  
  `;

export const FormFieldMinMaxLabel = styled.label`

`;

export const FormFieldMinMaxInput = styled.input
  .attrs({ type: 'number' })`
  
  `;

export const RadioInputContainer = styled.span`

`;

export const FormFieldRangeRadioLabel = styled.label``;

export const FormFieldRangeRadioInput = styled.input
  .attrs({ type: 'radio' })``;

export const RangeRadioContainer = styled.div``;