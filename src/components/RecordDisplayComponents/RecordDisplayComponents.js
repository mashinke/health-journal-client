import styled from 'styled-components';
import { OuterListContainer, OuterListItemContainer } from '../StyledComponents/StyledComponents';

export const RecordDisplayContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: auto;
  @media (min-width: 45rem) {
    flex-direction: row-reverse;
  }
`;

export const SummaryContainer = styled(OuterListContainer)`
  flex-direction: column;
  flex-grow: 1;
  justify-content: stretch;
  background-color: ${props => props.theme.primary.dark};
  border-color: ${props => props.theme.primary.verydark};
  margin: 0 1rem .5rem;
  @media (min-width: 45rem) {
    margin: 0 1rem 0 .25rem;
  }
`;

export const SummaryItemContainer = styled(OuterListItemContainer)`
  background-color: ${props => props.theme.primary.medium};
  border-color: ${props => props.theme.primary.dark};
  flex-grow: 1;
  width: 100%;
  padding: 0;
`;

export const RecordListContainer = styled(OuterListContainer)`
  flex-wrap: nowrap;
  flex-direction: column;
  margin: 0 1rem;
  @media (min-width: 45rem){
    max-width: calc((100% - 2.5rem) / 2);
    overflow-y: auto;
    margin: 0 .25rem 0 1rem;
}
`;

export const RecordListItem = styled(OuterListItemContainer)`
  flex-direction: column;
  width: 100%;
  padding: 0;
`;

export const RecordListItemHeader = styled.header`
  display: flex;
  flex-direction: row;
  margin: .25rem 0;
`;

export const RecordListItemName = styled.h4`
  margin: 0 0 .5rem 0;
`;

export const RecordListItemTime = styled.div``;

export const RecordFieldListItemMeta = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: .25rem;
`;

export const RecordListItemDeleteButtonContainer = styled.div`
  // width: 1.75rem;
`;

export const RecordFieldList = styled(OuterListContainer)`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: .25rem;
  margin: 0 .25rem .25rem;
  background-color: ${props => props.theme.primary.medium};
  border-color: ${props => props.theme.primary.dark};
  align-content: stretch;

`;

export const RecordFieldListItem = styled.li`
  border: 1px solid ${props => props.theme.primary.dark};
  background-color: ${props => props.theme.primary.light};
  border-radius: .25rem;
  margin: .125rem;
  padding: .25rem;
`;
