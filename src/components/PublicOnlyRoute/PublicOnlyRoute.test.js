import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PublicOnlyRoute from './PublicOnlyRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const Component = () => <div />;
  ReactDOM.render((
    <BrowserRouter>
      <PublicOnlyRoute
        exact
        path="/"
        component={Component}
      />
    </BrowserRouter>
  ),
  div);
  ReactDOM.unmountComponentAtNode(div);
});
