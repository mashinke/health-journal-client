import styled from 'styled-components';

export const DateRangeSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: .5rem;
  padding: 0;
`;

export const DateRangeSelectControls = styled.div`
padding: .125rem;
margin: .5rem 0 0 0;
background-color: ${(props) => props.theme.secondary.medium};
border: 1px solid ${(props) => props.theme.secondary.dark};
border-radius: .5rem;
list-style: none;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: flex-start;
:first-child {
  margin: 0;
}
`;

export const DateRangeSelectInput = styled.div`

display: flex;
margin: .125rem;
padding: .25rem;
background-color: ${(props) => props.theme.primary.light};
border: 1px solid ${(props) => props.theme.primary.dark};
border-radius: .25rem;
`;

export const DateRangeSelectLabel = styled.label`
margin: auto .5rem;
font-weight: bold;
`;

export const DateRangeSelectInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DateRangeSelectInputLabel = styled.label`
flex-grow: 1;
text-align: right;
margin: auto .5rem auto;
`;

export const ShowDateFilter = styled.div`
padding: .125rem;
margin: 0;
background-color: ${(props) => props.theme.secondary.medium};
border: 1px solid ${(props) => props.theme.secondary.dark};
border-radius: .5rem;
list-style: none;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: flex-start;
`;

export const ShowDateFilterFromTo = styled.div`
  display: flex;
  margin: .125rem;
  padding: .25rem;
  background-color: ${(props) => props.theme.primary.light};
  border: 1px solid ${(props) => props.theme.primary.dark};
  border-radius: .25rem;
`;

export const ShowDateFilterFromToDates = styled.div`
  margin: auto .5rem;
`;

export const ShowDateFilterFromToArrow = styled.div`
  margin: auto 0;
  flex-grow: 1;
`;
