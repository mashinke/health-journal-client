import React, { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import UserErrorMessage from '../UserErrorMessage/UserErrorMessage';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import ThemeService from '../../services/theme-service';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


function App() {
  const [theme, setTheme] = useState({ primary: {}, secondary: {} });
  useEffect(() => setTheme(ThemeService.getTheme()), [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <UserErrorMessage />
        <Switch>
          <PublicOnlyRoute
            exact
            path={'/login'}
            component={LoginRoute}
          />
          <PublicOnlyRoute
            exact
            path={'/register'}
            component={RegistrationRoute}
          />
          <PrivateRoute
            exact
            path={'/'}
            component={DashboardRoute}
          />
        </Switch>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;