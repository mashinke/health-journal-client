import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import ThemeService from '../../services/theme-service';
import * as components from './DashboardComponents';

Object.entries(components).forEach(([componentName, Component]) => {
  it(`${componentName} renders without crashing`,
    () => {
      const div = document.createElement('div');
      ReactDOM.render((
        <ThemeProvider theme={(ThemeService.getTheme())}>
          <Component />
        </ThemeProvider>
      ),
      div);
      ReactDOM.unmountComponentAtNode(div);
    });
});
