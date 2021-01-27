import React from 'react';
import ReactDOM from 'react-dom';
import DashboardViewTitle from './DashboardViewTitle';

it('renders without crashing',
  () => {
    const div = document.createElement('div');
    ReactDOM.render((
      <DashboardViewTitle />
    ),
    div);
    ReactDOM.unmountComponentAtNode(div);
  });
