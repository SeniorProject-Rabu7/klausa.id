import * as React from 'react';

// importing material UI components
import { AppBar, Toolbar } from '@mui/material';
import logo from './klausa.svg'
import { css } from '@emotion/css';
// const logoStyle = 

export default function Header() {
  return (
    <AppBar position='static' sx={{ mb: '1rem' }}>
      <Toolbar sx={{
        justifyContent: 'center'
      }}>
        <div>
          <img src={logo} alt='klausa.id' className={css`
            height: 2rem;
          `} />
        </div>
      </Toolbar>
    </AppBar>
  );
}