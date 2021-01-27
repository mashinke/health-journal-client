import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import ThemeService from '../../services/theme-service';
import InputField from './InputField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <ThemeProvider theme={(ThemeService.getTheme())}>
      <InputField />
    </ThemeProvider>
  ),
  div);
  ReactDOM.unmountComponentAtNode(div);
});
