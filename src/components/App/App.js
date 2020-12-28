import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import './App.css';

function App() {
  return (
    <div className='App'>
      <main>
        <Switch>
          <PublicOnlyRoute
            exact
            path={'/login'}
            component={LoginRoute}
          />
          <Route path='/'>
            Main Path
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;