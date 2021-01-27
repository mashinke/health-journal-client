import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const Component = () => <div />;
  ReactDOM.render((
    <BrowserRouter>
      <PrivateRoute
        exact
        path="/"
        component={Component}
      />
    </BrowserRouter>
  ),
  div);
  ReactDOM.unmountComponentAtNode(div);
});
