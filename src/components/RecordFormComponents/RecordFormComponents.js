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

export const FormMetaContainer = styled.div`
  margin: .5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid ${props => props.theme.primary.dark};
  border-radius: .5rem .5rem;
  padding: .25rem 1rem .25rem .25rem;
  background-color: ${props => props.theme.primary.medium};
  text-align: right;
  color: ${props => props.theme.primary.text};
`;

export const FormNameContainer = styled.h2`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
`;

export const FormNameLabel = styled.label``;

export const FormNameInput = styled.input`
  font-size: inherit;
  border: none;
  color: inherit;
  background-color: ${props => props.theme.primary.medium};
  margin: 0 0 0 1rem;
  width: calc(100% - 1rem);
  transition: 200ms all;
  :hover, :focus {
    background-color: ${props => props.theme.primary.light};
  }
`;

export const FormDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormDescriptionLabel = styled.label`
  text-align: left;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const FormDescriptionInput = styled.textarea`
  font-size: inherit;
  font-family: inherit;
  background-color: ${props => props.theme.primary.medium};
  border: none;
  border-radius: .25rem;
  color: inherit;
  margin: 0 0 0 .5rem;
  width: 100%;
  transition: 200ms all;
  :hover, :focus {
    background-color: ${props => props.theme.primary.light};
  }
`;

export const RecordFormContainer = styled.form`
  margin: 0 1rem;
`;

export const FormFieldsContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 30rem) {
      flex-direction: row;
      align-content: space-between;
      justify-content: space-between;
      flex-wrap: wrap;
  }
`;

export const FormFieldContainer = styled.div`
  margin: .5rem 0;
  padding: .5rem;
  border: 1px solid ${props => props.theme.secondary.dark};
  border-radius: .5rem;
  background-color: ${props => props.theme.secondary.medium};
  display: flex;
  @media (min-width: 30rem) {
    width: calc((100% - 1rem) / 2);
}
`;

export const FormFieldInputContainer = styled.div``;

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

export const FieldUpDownButtonsContainer = styled.div``;

export const AddFieldButtonsContainer = styled.div``;

export const FormSubmitResetContainer = styled.div``;