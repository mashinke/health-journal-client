import styled from 'styled-components';

export const FormNameInput = styled.input`
  font-size: inherit;
  background: inherit;
  border: none;
  color: inherit;
  margin: 0 0 0 1rem;
  transition: 200ms all;
  :hover {
    background-color: ${props => props.theme.primary.medium};
  }
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

export const RecordTypeSelect = styled.p`

`;