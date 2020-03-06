import React from 'react';
import { Toolbar, Container, AppBar } from '@material-ui/core';
import { Logo } from './styles';

const Header = () => {
  return (
    <AppBar>
      <Toolbar style={{ backgroundColor: '#CC0000' }}>
        <Container>
          <Logo />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
