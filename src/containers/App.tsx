import React, { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TopNav from '@Components/TopNav';

const ColorModeContext = createContext({ toggleColorMode: () => {} });
// const ColorModeContext =
const App = (): JSX.Element => {
  const [page, setPage] = useState<number>(0);
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useContext(ColorModeContext);
  const themeMode = useMemo(
    () => ({
      toggleColorMode: () => {
        console.log(mode);
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const razeTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,

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
      }),
    [mode],
  );

  const pages = [
    {
      label: 'City News',
      href: '/news',
      value: 0,
    },
    {
      label: 'Citizen Creations',
      href: '/creations',
      value: 1,
    },
    {
      label: 'City Features',
      href: '/feautres',
      value: 2,
    },
  ];

  const changePage = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    page: number,
  ): void => {
    event.preventDefault();
    setPage(page);
    console.log(mode);
  };

  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={razeTheme}>
          <CssBaseline />
          <TopNav
            pages={pages}
            selected={page}
            switchHandler={themeMode.toggleColorMode}
            changeHandler={changePage}
          />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
};

export default App;
