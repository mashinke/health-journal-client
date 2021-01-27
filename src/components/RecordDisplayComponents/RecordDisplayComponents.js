import styled from 'styled-components';
import { OuterListContainer, OuterListItemContainer } from '../ListComponents/ListComponents';

export const RecordDisplayContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: auto;
  @media (min-width: 45rem) {
    flex-direction: row-reverse;
  }
`;

export const SummaryContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 0 0 .5rem 0;
  @media (min-width: 45rem) {
    margin-bottom: 0;
  }
`;

export const SummaryListContainer = styled(OuterListContainer)`
  background-color: ${(props) => props.theme.secondary.medium};
  border-color: ${(props) => props.theme.secondary.dark};
  border-radius: 0 0 .5rem .5rem;
  border-top: 0;
  margin: 0 1rem 0;
  flex-grow: 1;
  align-content: stretch;
  @media (min-width: 45rem){
    margin-left: .25rem;
  }
`;

export const SummaryListHeading = styled.h3`
  margin: 0 1rem;
  padding: .25rem;
  color: ${(props) => props.theme.secondary.text};
  background-color: ${(props) => props.theme.secondary.medium};
  border: 1px solid ${(props) => props.theme.secondary.dark};
  border-radius: .5rem .5rem 0 0;
  border-bottom: 0;
  align-content: stretch;
  @media (min-width: 45rem){
    margin-left: .25rem;
  }
`;

export const SummaryItemContainer = styled(OuterListItemContainer)`
  padding-left: .5rem;
  background-color: ${(props) => props.theme.primary.medium};
  border-color: ${(props) => props.theme.primary.dark};
  flex-direction: column;
  :last-child:nth-child(odd){
    flex-grow: 1;
  }
  @media (min-width: 45rem) {
    width: 100%;
  }
  @media (min-width: 60rem) {
    width: calc((100% - .5rem) / 2);
  }
`;

export const SummaryItemHeading = styled.h4`
margin: .5rem 0 .25rem;
`;

export const SummaryItemBodyContainer = styled.div`
display: flex;
background-color: ${(props) => props.theme.primary.light};
border: 1px solid ${(props) => props.theme.primary.dark};
border-radius: .5rem;
height: 100%;
`;

export const SummaryItemBody = styled.div`
font-size: 4rem;
text-align: center;
margin: auto;
padding: 1rem;  
`;

export const RecordListContainer = styled(OuterListContainer)`
  flex-wrap: nowrap;
  flex-direction: column;
  margin: 0 1rem;  
  background-color: ${(props) => props.theme.primary.medium};
  border-color: ${(props) => props.theme.primary.dark};
  @media (min-width: 45rem){
    max-width: calc((100% - 2.5rem) / 2);
    overflow-y: auto;
    margin: 0 .25rem 0 1rem;
}
`;

export const RecordListHeading = styled.h3`
  margin: 0 1rem 0 .25rem;
  padding: .25rem;
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
  background-color: ${(props) => props.theme.primary.dark};
  border-color: ${(props) => props.theme.primary.verydark};
  align-content: stretch;

`;

export const RecordFieldListItem = styled.li`
  border: 1px solid ${(props) => props.theme.primary.verydark};
  background-color: ${(props) => props.theme.primary.light};
  border-radius: .25rem;
  margin: .125rem;
  padding: .25rem;
`;
