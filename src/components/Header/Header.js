import React, { useContext } from 'react';
import styled from 'styled-components';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import RoundButton from '../LogoutButton/LogoutButton';

const AppHeader = styled.header`
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  height: 2.75rem;
`;
const AppName = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: auto 0;
  flex: 1;
  padding: 0 0 0 .5rem;
`;

function Header(props) {
  const userContext = useContext(UserContext);

  return (
    <AppHeader>
      <AppName>Health Journal</AppName>
      {
        TokenService.hasAuthToken()
        && <RoundButton onClick={userContext.processLogout} />
      }
    </AppHeader>
  )
}

export default Header;