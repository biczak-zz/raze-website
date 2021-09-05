import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
}
`;

export default GlobalStyle;
