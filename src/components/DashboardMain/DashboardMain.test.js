import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import ThemeService from '../../services/theme-service';
import DashboardMain from './DashboardMain';

it('renders without crashing',
  () => {
    const div = document.createElement('div');
    ReactDOM.render((
      <ThemeProvider theme={(ThemeService.getTheme())}>
        <DashboardMain />
      </ThemeProvider>
    ),
    div);
    ReactDOM.unmountComponentAtNode(div);
  });
