import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ThemeSwitcher from './ThemeSwitcher';
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

interface TopNavProps {
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

const TopNav = (props: TopNavProps) => (
  <Box
    sx={{
      width: '100%',
      backgroundColor: 'primary.main',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Tabs
      value={props.selected}
      onChange={props.changeHandler}
      aria-label="navigation tabs"
      textColor="secondary"
      centered
      indicatorColor="secondary"
      sx={{ margin: 'auto' }}
    >
      {createLinkTabs(props.pages)}
    </Tabs>
    <ThemeSwitcher changeHandler={props.switchHandler} />
  </Box>
);

export default TopNav;
