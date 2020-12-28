import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
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
          <Route exact path='/'>
            Main Path
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;