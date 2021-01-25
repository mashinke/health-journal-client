import styled from 'styled-components';

const DashboardWelcome = styled.div`
  margin: .5rem .5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.secondary.medium};
  border-radius: .25rem;
  border: 1px solid ${(props) => props.theme.secondary.dark};
  color: ${(props) => props.theme.secondary.text};
  text-align: center
`;

export default DashboardWelcome;
