import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import ThemeService from '../../services/theme-service';
import * as buttons from './Button';

Object.entries(buttons).forEach(([componentName, Button]) => {
  it(`${componentName} renders without crashing`,
    () => {
      const div = document.createElement('div');
      ReactDOM.render((
        <ThemeProvider theme={(ThemeService.getTheme())}>
          <Button />
        </ThemeProvider>
      ),
      div);
      ReactDOM.unmountComponentAtNode(div);
    });
});
