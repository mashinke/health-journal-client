import React from 'react';
import { Switch } from 'react-router-dom';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import Header from '../Header/Header';
import './App.css';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import UserErrorMessage from '../UserErrorMessage/UserErrorMessage';

function App() {
  return (
    <div className='App'>
      <Header />
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
    </div>
  );
}

export default App;