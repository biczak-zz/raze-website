import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from '@Containers/App';
import GlobalStyle from '@Utilities/globalStyle';
import theme from '@Utilities/theme';

const root = document.getElementById('root');

render(
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <App />
    </div>
  </ThemeProvider>,
  root,
);
