import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ThemeService from '../../services/theme-service';
import * as components from './FormComponents';

Object.entries(components).forEach(([componentName, Component]) => {
  it(`${componentName} renders without crashing`,
    () => {
      const div = document.createElement('div');
      ReactDOM.render((
        <ThemeProvider theme={(ThemeService.getTheme())}>
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        </ThemeProvider>
      ),
      div);
      ReactDOM.unmountComponentAtNode(div);
    });
});
