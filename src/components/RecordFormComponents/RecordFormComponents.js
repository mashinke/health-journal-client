import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { IconContext } from 'react-icons';
import { RiAddLine } from 'react-icons/ri';
import { OuterListContainer, OuterListItemContainer } from '../StyledComponents/StyledComponents';

export const FormTitle = styled.h2`
  margin: 0 0 .5rem 0;
  border: 1px solid ${props => props.theme.secondary.dark};
  border-radius: .5rem .5rem;
  padding: .25rem 1rem .25rem .25rem;
  background-color: ${props => props.theme.secondary.medium};
  text-align: center;
  color: ${props => props.theme.secondary.text};
`;

export const SelectFormLabel = styled.label`
  padding: .25rem 0;
  width: 100%;
  text-align: center;
`;

export const SelectFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
  border: 1px solid ${props => props.theme.secondary.dark};
  border-radius: .5rem .5rem;
  padding: .25rem 1rem .25rem .25rem;
  background-color: ${props => props.theme.secondary.medium};
  text-align: right;
  color: ${props => props.theme.secondary.text};
  @media (min-width: 45rem){
    margin-left: .25rem;
  }
`;

export const FormMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: flex-start;
  border: 1px solid ${props => props.theme.primary.dark};
  border-radius: .5rem .5rem;
  padding: .25rem 1rem .25rem .25rem;
  background-color: ${props => props.theme.primary.medium};
  text-align: right;
  color: ${props => props.theme.primary.text};
  @media (min-width: 45rem){
    margin-right: .25rem;
  }
`;

export const FormHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    margin: 0 0 .5rem 0;
    @media (min-width: 45rem){
      flex-direction: row-reverse;
  }
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

export const ValidationError = styled.div`
  color: ${props => props.theme.primary.light};
  background-color: ${props => props.theme.primary.text};
  text-align: left;
  padding: .25rem;
  border-radius: .5rem;
  border: 1px solid ${props => props.theme.primary.dark}
`;

export const FormNameValidationError = styled(ValidationError)`

`;

export const MinMaxValidationError = styled(ValidationError)``;

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

export const FormFieldsContainer = styled(OuterListContainer)``;

export const FormFieldContainer = styled(OuterListItemContainer)``;

export const DoubleWidthFieldContainer = styled(FormFieldContainer)`

@media (min-width: 30rem) {
  width: 100%;
}
@media (min-width: 45rem) {
  width: calc((100% - .5rem) / 3 * 2);
}
@media (min-width: 60rem){
  width: calc((100% - .5rem) / 2);
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

export const FieldValidationError = styled(ValidationError)`
  margin: .5rem 0 0 0;
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
  justify-content: flex-start;
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
  margin: .5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 1px solid ${props => props.theme.primary.dark};
  border-radius: .5rem .5rem;
  padding: .25rem 1rem .25rem .25rem;
  background-color: ${props => props.theme.primary.medium};
  text-align: right;
  color: ${props => props.theme.primary.text};
`;

export const FieldDeletedMessage = styled.div`
flex - grow: 1;
margin: auto .25rem;
`;