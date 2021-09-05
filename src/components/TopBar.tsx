import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import ThemeSwitcher from './ThemeSwitcher';
import Typography from '@mui/material/Typography';
import App from 'containers/App';
interface LinkTabProps {
  label?: string;
  href?: string;
  value?: number;
}

const LinkTab = (props: LinkTabProps) => (
  <Tab
    component="a"
    onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
    }}
    {...props}
  />
);

interface TopBarProps {
  changeHandler: (event: React.ChangeEvent<{}>, value: number) => void;
  switchHandler: (event: React.ChangeEvent<{}>, value: string) => void;
  pages: LinkTabProps[];
  selected: number;
}

const createLinkTabs = (pages: LinkTabProps[]) => {
  return pages.map((page, index) => (
    <LinkTab label={page.label} key={index} value={index} />
  ));
};

const TopBar = (props: TopBarProps) => (
  <Box sx={{ marginBottom: '25px' }}>
    <AppBar
      position="static"
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        padding: '0px 10px',
      }}
    >
      <Box sx={{ width: '33%', textAlign: 'left' }}>
        <ThemeSwitcher changeHandler={props.switchHandler} />
      </Box>
      <Box sx={{ width: '33%', textAlign: 'center' }}>
        <Typography variant="h6" component="span">
          Live from Los Santos
        </Typography>
      </Box>
      <Box sx={{ width: '33%', textAlign: 'right' }}>
        <Typography variant="h6" component="span">
          Powered by{' '}
          <b>
            <i>Raze Network</i>
          </b>
        </Typography>
      </Box>
    </AppBar>
  </Box>
);

export default TopBar;
