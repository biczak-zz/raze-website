import { createTheme } from '@mui/material/styles';

const razeTheme = createTheme({
  palette: {
    primary: {
      light: '#af59ff ',
      main: '#7A26D3',
      dark: '#4300a0',
      contrastText: '#f3f3ff',
    },
    secondary: {
      light: '#33ABF7',
      main: '#0197f6',
      dark: '#0069AC',
      contrastText: '#252244',
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
    },
  },
  typography: {},
});

export default razeTheme;
