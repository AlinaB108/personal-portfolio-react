import React from 'react';
import './Navbar.css';
import '../../App.css';
import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static" item sx={{ p:2 }}>
      <Toolbar>
        <Grid container justifyContent="center" item xs={6}>
          <Typography variant="h5" style={{ textDecoration: 'none', color: 'inherit' }}>
            Alina Badillo
          </Typography>
        </Grid>
        <Grid container justifyContent="center" textAlign="center" item xs={6} sx={{ px:4 }}>
          <Box mx={6}>
            <Button component="a" href="#About" color="inherit">
              About
            </Button>
            <Button component="a" href="#Projects" color="inherit">
              Projects
            </Button>
            <Button component="a" href="#Contacts" color="inherit">
              Contacts
            </Button>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

//  https://www.youtube.com/watch?v=SLfhMt5OUPI