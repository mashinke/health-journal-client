import styled from 'styled-components';

export const FilterSelectBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 1rem;
  border: 1px solid ${(props) => props.theme.secondary.dark};
  border-radius: .5rem .5rem 0 0;
  padding: .5rem 1rem .5rem .25rem;
  background-color: ${(props) => props.theme.secondary.medium};
  text-align: right;
  color: ${(props) => props.theme.secondary.text};
  transition: 200ms border-radius;
  :last-child{
    margin-bottom: .5rem;
    border-radius: .5rem;
  }
`;

export const FilterSelectLabel = styled.div`
  height: 2rem;
  line-height: 2rem;
  padding-left: 1rem;
  flex-grow: 2;
  text-align: left;
`;

export const FilterControlBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem .5rem;
  border: 1px solid ${(props) => props.theme.secondary.dark};
  border-top: 0px;
  border-radius: 0 0 .5rem .5rem;
  background-color: ${(props) => props.theme.secondary.light};
  transition: 200ms height;
`;
