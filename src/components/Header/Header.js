import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { IconContext } from 'react-icons';
import { LogoutButton, NewRecordButton, ReviewRecordsButton } from '../Button/Button';

const AppHeader = styled.header`
  background-color: ${props => props.theme.primary.medium};
  line-height: 4rem;
  display: flex;
  flex-direction: row;
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
  const theme = useContext(ThemeContext);

  return (
    <AppHeader>
      <AppName>Health Journal</AppName>
      <IconContext.Provider value={
        {
          color: theme.secondary.text,
          style: {
            verticalAlign: 'middle',
            fontSize: '1.5rem'
          }
        }
      }>
        <NewRecordButton onClick={() => props.newRecord()} />
        <LogoutButton onClick={() => userContext.processLogout()} />
      </IconContext.Provider>
    </AppHeader>
  )
}

export default Header;