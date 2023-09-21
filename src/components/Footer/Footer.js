import React from "react";
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { Facebook } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <Container maxWidth="100%" sx={{ p: 1 }} style={{ backgroundColor: '#bfadcc' }}>
      <Grid container sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            You can find me here
          </Typography>
          <Link href="https://github.com/AlinaB108" variant="linkicon" sx={{ pl: 1, pr: 1 }}
          >
            <GitHubIcon  />
          </Link>
          <Link href="https://www.linkedin.com/in/alina-badillo/" variant="linkicon" sx={{ pl: 1, pr: 1 }}>
            <LinkedInIcon />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100000745067085" variant="linkicon" sx={{ pl: 1, pr: 1 }}>
            <Facebook />
          </Link>
        </Grid>
      </Grid>
      <Box mt={5}>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          AlinaB
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
}

export default Footer;