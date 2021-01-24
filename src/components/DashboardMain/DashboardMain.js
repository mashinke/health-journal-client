import styled from 'styled-components';

const DashboardMain = styled.main`
  margin: 0;
  padding: .5rem 0;
  background-color: ${(props) => props.theme.primary.light};
  display: flex;
  flex-direction: column;
  @media (min-width: 45rem){
    height: calc(100vh - 4.25rem);
    margin: 0 10%;
  }
`;

export default DashboardMain;
