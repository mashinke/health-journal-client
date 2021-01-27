import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ThemeService from '../../services/theme-service';
import RegistrationForm from './RegistrationForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <ThemeProvider theme={(ThemeService.getTheme())}>
      <BrowserRouter>
        <RegistrationForm />
      </BrowserRouter>
    </ThemeProvider>
  ),
  div);
  ReactDOM.unmountComponentAtNode(div);
});
