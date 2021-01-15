import styled from 'styled-components';

export const SelectMultipleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: .5rem;
  padding: 0;
`;

export const ItemsList = styled.ul`
  padding: .125rem;
  margin: 0;
  background-color: ${props => props.theme.secondary.medium};
  border: 1px solid ${props => props.theme.secondary.dark};
  border-radius: .5rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex: 5;
  align-items: flex-start;
  align-content: flex-start;
  height: 2.5rem;
  max-height: 2.5rem;
  overflow-y: auto;
`;

export const DropDownItemsList = styled(ItemsList)`
  height: 5rem;
  max-height: unset;
`;

export const DropdownListItem = styled.li`
  line-height: 1.25rem;
  margin: .125rem;
  padding: .25rem;
  background-color: ${props =>
    props.isHighlighted
      ? props.theme.primary.medium
      : props.theme.primary.light};
  border: 1px solid ${props => props.theme.primary.dark};
  cursor: pointer;
  border-radius: .25rem;
`;

export const SelectedListItem = styled(DropdownListItem)`
    cursor: unset;
    display: flex;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectButton = styled.button`
  color: ${props => props.theme.primary.text};
  background-color: ${props => props.theme.primary.light};
  border: 1px solid ${props => props.theme.primary.medium};
  border-radius: .25rem;
  width: 3.5rem;
  height: 2.5rem;
  margin: 0 .5rem auto 0;
  transition: 200ms all;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.primary.medium};
  }
`;


export const SelectButtonLabel = styled.label`
cursor: pointer;
`;

export const DropDownContainer = styled.div`
  display: flex;
  padding: 0.5rem 0 0;
`;