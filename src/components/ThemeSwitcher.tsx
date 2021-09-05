import React, { createContext } from 'react';
import { useTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const ThemeSwitch = (props) => {
  const theme = useTheme();
  return (
    <Switch
      sx={{
        '& .MuiSwitch-thumb': {
          background:
            theme.palette.mode === 'light'
              ? 'url(https://i.ibb.co/7JfqXxB/sunny.png)'
              : 'url(https://i.ibb.co/FxzBYR9/night.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        },
      }}
      onChange={props.changeHandler}
    />
  );
};

export default ThemeSwitch;
