import React from 'react';
import { render } from 'react-dom';
import Box from '@mui/material/Box';
import App from '@Containers/App';
import GlobalStyle from '@Utilities/globalStyle';

const root = document.getElementById('root');

render(
  <Box sx={{ height: '100vh' }}>
    <GlobalStyle />
    <App />
  </Box>,
  root,
);
