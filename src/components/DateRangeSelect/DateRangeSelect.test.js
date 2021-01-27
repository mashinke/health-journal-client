import React from 'react';
import ReactDOM from 'react-dom';
import DateRangeSelect from './DateRangeSelect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <DateRangeSelect />
  ),
  div);
  ReactDOM.unmountComponentAtNode(div);
});
