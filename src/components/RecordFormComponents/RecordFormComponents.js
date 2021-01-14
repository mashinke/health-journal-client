import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { IconContext } from 'react-icons';
import { RiAddLine } from 'react-icons/ri';


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
  margin: .5rem 0 .5rem 0;
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
    margin: .5rem 0 .5rem 0;
    border: 1px solid ${props => props.theme.secondary.verydark};
    border-radius: .5rem .5rem;
    padding: 0 .25rem;
    background-color: ${props => props.theme.secondary.dark};
    display: flex;
    margin: 0;
    flex-direction: column;
    @media (min-width: 30rem) {
      flex-direction: row;
      align-content: space-between;
      justify-content: space-between;
      flex-wrap: wrap;
  }
`;

export const FormFieldContainer = styled.div`
  margin: .25rem 0;
  padding: .5rem .5rem .5rem .25rem;
  border: 1px solid ${props => props.theme.secondary.dark};
  border-radius: .5rem;
  background-color: ${props => props.theme.secondary.medium};
  display: flex;
  @media (min-width: 30rem) {
    width: calc((100% - 1rem) / 2);
}
`;

export const FormFieldInputContainer = styled.div`
  margin: 0 .25rem;
  flex-grow: 1;
  max-width: calc(100% - 3rem);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
`;

export const FormFieldLabel = styled.label`
  width: 100%;
  margin: 0 0 .5rem 0;
`;

export const FormFieldNameInput = styled.input
  .attrs({ type: 'text', maxLength: '25' })`
  width: 100%;
  border: 1px solid ${props => props.theme.secondary.dark};
  border-radius: .25rem;
  padding: .25rem;
  background-color: ${props => props.theme.secondary.medium};
  font-size: 1rem;
  color: ${props => props.theme.secondary.text};
  :hover, :focus {
    background-color: ${props => props.theme.secondary.light};
  }
`

const FormFieldInput = styled.input`
  padding: .25rem;
  background-color: ${props => props.theme.primary.light};
  border: 1px solid ${props => props.theme.primary.dark};
  color: ${props => props.theme.primary.text};
  border-radius: .25rem;
  :hover, :focus {
  background-color: ${props => props.theme.primary.light};
  }
`;

export const FormFieldTextInput = styled(FormFieldInput)
  .attrs({ type: 'text', size: '12' })`
  flex-grow: 2;
  `;

export const FormFieldNumberInput = styled(FormFieldInput)
  .attrs({ type: 'number' })`
  max-width: 3rem;
  margin 0 0 0 auto;
  `;

export const FormFieldBooleanInput = styled.div`
  margin: 0 auto;
`;

export const FormFieldRangeInput = styled.fieldset`
  border: 1px solid ${props => props.theme.secondary.dark};
  border-radius: .25rem;
  `;

export const FormFieldRangeLegend = styled.legend`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${props => props.theme.secondary.dark};
  border-radius: .25rem;
  padding: .25rem;
  `;

export const FormFieldRangeName = styled(FormFieldNameInput)`
  border: 0;
  padding: 0;
  `;

export const FormFieldMinMaxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  `;

export const FormFieldMinMaxInput = styled(FormFieldNumberInput)
  .attrs({ type: 'number' })`
  max-width: 2.5rem;
  margin: .25rem 0;

  `;

export const RadioInputContainer = styled.span`
  padding: .125rem;

  `;

export const RangeRadioContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FieldUpDownButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


export const AddFieldContainer = styled(FormFieldContainer)`
    display: flex;
    flex-direction: row-reverse;
    // align-items: flex-start;
  `;

export const AddFieldLabel = styled.label`
  display: inline-block;
  padding: 0;
  text-align: center;
  border: 1px solid transparent;
  text-decoration: none;
  margin: .25rem;
  cursor: pointer;
  transition: 200ms all;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  min-width: 2rem;
  line-height: 1.625rem;
  background-color: ${props => props.theme.primary.light};
  :hover {
    background-color: ${props => props.theme.primary.medium};
    border-color: ${props => props.theme.primary.text};
  }
`;

export function AddFieldLabelIcon(props) {
  const theme = useContext(ThemeContext);
  return (
    <IconContext.Provider
      value={
        {
          color: theme.primary.text,
          style: {
            verticalAlign: 'middle',
            fontSize: '1.25rem'
          }
        }
      }
    >
      <RiAddLine />
    </IconContext.Provider>
  )
}

export const FormSubmitResetContainer = styled.div`
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

export const FieldDeletedMessage = styled.div`
flex - grow: 1;
margin: auto .25rem;
`;