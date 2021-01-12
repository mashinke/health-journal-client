import styled from 'styled-components';

export const DropDownList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: .25rem;
  margin: 0 ;
  background-color: ${props => props.theme.secondary.medium};
  border: 1px solid ${props => props.theme.secondary.dark};
  border-radius: .5rem;
  :focus {
    border: 0px;
  }
`;

export const DropDownListItem = styled.li`
cursor: pointer;
margin: .125rem .25rem;
padding: .125rem;
background-color: ${props =>
    props.isHighlighted
      ? props.theme.secondary.medium
      : props.theme.secondary.light}
`;