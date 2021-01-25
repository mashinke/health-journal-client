import styled from 'styled-components';

export const OuterListContainer = styled.ul`
border: 1px solid ${(props) => props.theme.secondary.verydark};
border-radius: .5rem .5rem;
padding: 0 0 .25rem .25rem;
background-color: ${(props) => props.theme.secondary.dark};
display: flex;
margin: 0;
flex-direction: column;
@media (min-width: 30rem) {
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
`;

export const OuterListItemContainer = styled.li`
  margin: .25rem .25rem 0 0;
  padding: .5rem .5rem .5rem .25rem;
  border: 1px solid ${(props) => props.theme.secondary.dark};
  border-radius: .5rem;
  background-color: ${(props) => props.theme.secondary.medium};
  display: flex;
  @media (min-width: 30rem) {
    width: calc((100% - .5rem) / 2);
  }
  @media (min-width: 45rem) {
    width: calc((100% - .75rem) / 3);
  }
  @media (min-width: 60rem){
    width: calc((100% - 1rem) / 4);
  }
`;
