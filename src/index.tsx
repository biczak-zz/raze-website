import React from 'react';
import { render } from 'react-dom';

import App from '@Containers/App';
import GlobalStyle from '@Utilities/globalStyle';
import razeTheme from '@Utilities/razeTheme';

const root = document.getElementById('root');

render(
  <div>
    <GlobalStyle />
    <App />
  </div>,
  root,
);
