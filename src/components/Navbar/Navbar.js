import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Grid, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import resume from '../../assets/alinabadillo-resume.docx';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const mobileMenuContent = (
    <List>
      <ListItem component="a" href="#About" onClick={closeMobileMenu}>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem component="a" href="#Projects" onClick={closeMobileMenu}>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem component="a" href="#Contacts" onClick={closeMobileMenu}>
        <ListItemText primary="Contacts" />
      </ListItem>
      <ListItem component="a" href='#Resume' onClick={closeMobileMenu}>
        <ListItemText primary="Resume" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="fixed" sx={{ p: 1.5 }} style={{ backgroundColor: '#bfadcc' }}>
      <Toolbar>
        <Grid container justifyContent="center" item xs={6}>
          <Typography variant="h5" style={{ textDecoration: 'none', color: 'inherit' }}>
            Alina Badillo
          </Typography>
        </Grid>
        <Grid container justifyContent="center" textAlign="center" item xs={6} sx={{ px: 4 }}>
          <Box mx={6}>
            <IconButton onClick={toggleMobileMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button component="a" href="#About" color="inherit">
                About
              </Button>
              <Button component="a" href="#Projects" color="inherit">
                Projects
              </Button>
              <Button component="a" href="#Contacts" color="inherit">
                Contacts
              </Button>
              <Button component="a" href="#Resume" color="inherit">
                Resume
              </Button>
            </Box>
          </Box>
          <Drawer anchor="right" open={isMobileMenuOpen} onClose={closeMobileMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
            {mobileMenuContent}
          </Drawer>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;