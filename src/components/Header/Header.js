import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { LogoutButton, NewRecordButton } from '../Button/Button';

const AppHeader = styled.header`
  background-color: ${props => props.theme.primary.medium};
  line-height: 4rem;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${props => props.theme.primary.dark};
`;
const AppName = styled.h1`
  font-size: 1.75rem;
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

      <NewRecordButton onClick={() => props.newRecord()} />
      <LogoutButton onClick={() => userContext.processLogout()} />
    </AppHeader>
  )
}

export default Header;