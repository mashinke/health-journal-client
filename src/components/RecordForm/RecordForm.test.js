import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import ThemeService from '../../services/theme-service';
import RecordForm from './RecordForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <ThemeProvider theme={(ThemeService.getTheme())}>
      <RecordForm />
    </ThemeProvider>
  ),
  div);
  ReactDOM.unmountComponentAtNode(div);
});
