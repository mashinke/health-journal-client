import styled from "styled-components";

const FilterControlBox = styled.div`
  display: flex;
  margin: 0 0 0 1rem;
  border: 1px solid ${props => props.theme.primary.medium};
  border-right: 0px;
  border-top: 0px;
  border-radius: 0 0 0 .5rem;
  padding: .5rem 1rem .5rem .25rem;
  background-color: ${props => props.theme.primary.light};
  transition: 200ms height;
`;

export default FilterControlBox;