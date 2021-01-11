import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 85vw;
  max-width: 30rem;
  border: 1px solid ${props => props.theme.primary.medium};;
  margin: 7.5vw auto;
  color: ${props => props.theme.primary.text};
`;

export const FormHeader = styled.h1`
  margin: 0;
  line-height: 4rem;
  text-align: center;
  background-color: ${props => props.theme.primary.medium};
`;

export const FormMain = styled.main`
  padding: .5rem 0;
  background-color: ${props => props.theme.primary.light}
`;

export const FormDescription = styled.p`
  margin: 0 0 1rem 1rem;
  border: 1px solid ${props => props.theme.secondary.dark};
  border-right: 0px;
  border-radius: .5rem 0 0 .5rem;
  padding: 1rem 1rem 1rem .5rem;
  background-color: ${props => props.theme.secondary.light};
  text-align: right;
  color: ${props => props.theme.secondary.text};
`;

export const FormTitle = styled.h2`
  margin: 2rem 0 0 1rem;
`;

export const StyledForm = styled.form`
  padding: 0 1rem 1rem;
`;

export const HaveAccountLink = styled(Link)`
  display: block;
  line-height: 2rem;
  border: 1px solid transparent;
  padding: 0 1rem;
  color: ${props => props.theme.primary.text};
  :hover {
     color: ${props => props.theme.primary.dark};
  }
  :active {
    border: 1px dotted ${props => props.theme.primary.medium}
  }
`;

export const FormInput = styled.div`
  margin: .75rem 0;
`;

export const Input = styled.input`
  background-color: ${props => props.theme.secondary.medium};
  color: ${props => props.theme.secondary.text};
  border: 1px solid ${props => props.theme.secondary.dark};
  border-radius: .375rem;
  margin: 0;
  display: block;
  width: 100%;
  font-size: 1.25rem;
  line-height: 2rem;
  :hover {
    background-color: ${props => props.theme.secondary.light};
  }
`;

export const Label = styled.label`
  margin: 0 auto .125rem 0;
  display: block;
`;

export const SubmitButton = styled.button
  .attrs({ type: 'submit' })`
    width: 100%;
    line-height: 3rem;
    font-size: 1.5rem;
    border: none;
    border-radius: .375rem;
    color: ${props => props.theme.primary.light};
    background-color: ${props => props.theme.primary.text};
    :hover {
      background-color: ${props => props.theme.primary.dark}
    }
  `;