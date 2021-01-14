import styled from 'styled-components';

export const SelectSingleContainer = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
`;

export const SelectSingleButton = styled.button`
  line-height: 1.25rem;
  margin: .125rem;
  padding: .25rem;
  background-color: ${props =>
    props.isHighlighted
      ? props.theme.primary.medium
      : props.theme.primary.light};
  border: 1px solid ${props => props.theme.primary.dark};
  color: inherit;
  font-size: inherit;
  cursor: pointer;
`;

export const SelectSingleButtonContainer = styled.div`
  padding: .125rem;
  background-color: ${props => props.theme.primary.medium};
  border: 1px solid ${props => props.theme.primary.dark};
  border-radius: .5rem ${props => props.isOpen && '.5rem 0 0'};
  border-bottom: ${props => props.isOpen && '0px'};
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;


export const ItemsList = styled.ul`
  padding: .125rem;
  margin: 0;
  background-color: ${props => props.theme.primary.medium};
  border: 1px solid ${props => props.theme.primary.dark};
  border-radius: ${props => props.isOpen && '0 0 .5rem'} .5rem;
  list-style: none;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: stretch;
  height: 5rem;
  overflow-y: auto;
`;

export const DropdownListItem = styled.li`
  line-height: 1.25rem;
  margin: .125rem;
  padding: .25rem;
  text-align: center;
  background-color: ${props =>
    props.isHighlighted
      ? props.theme.primary.medium
      : props.theme.primary.light};
  border: 1px solid ${props => props.theme.primary.dark};
  cursor: pointer;
  border-radius: .25rem;
`;
