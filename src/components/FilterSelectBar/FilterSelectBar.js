import styled from 'styled-components';

const FilterSelectBar = styled.div`
  display: flex;
  margin: 0 0 0 1rem;
  border: 1px solid ${props => props.theme.secondary.dark};
  border-right: 0px;
  border-radius: .5rem 0 0 0;
  padding: .5rem 1rem .5rem .25rem;
  background-color: ${props => props.theme.secondary.medium};
  text-align: right;
  color: ${props => props.theme.secondary.text};
  transition: 200ms border-radius;
  :last-child{
    margin-bottom: 1rem;
    border-radius: .5rem 0 0 .5rem;
  }
`;

export default FilterSelectBar;