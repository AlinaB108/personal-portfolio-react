import React from 'react';
import '../../App.css';
import './Projects.css';
import { AppBar, Box, Toolbar, Paper, Typography, Button, Grid } from '@mui/material';
import blobmania from "../../assets/images/blobmania.png";

export default function Projects() {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ p: 5 }}>
      <Grid item xs={12}>
        <Typography variant="h5" textAlign='center'>
          My Projects
        </Typography>
      </Grid>
      {/* First Project */}
      <Paper sx={{ my:3 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} container justifyContent="flex-end" alignItems="center" sx={{ p: 2 }}>
            <Typography variant="h6" textAlign='center'>
              Blob Mania is a multiplayer 2D shooter! Each player is given 5 lives. Shoot the other player while dodging their attacks to win!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} container justifyContent="flex-start" alignItems="center">
            <img src={blobmania} width='80%' height='auto' style={{ borderRadius: '25px' }} className='me' alt="Blob Mania" />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Grid item>
            <Button>Deployed Site</Button>
          </Grid>
          <Grid item>
            <Button>GitHub</Button>
          </Grid>
        </Grid>
      </Paper>
      {/* Second Project */}
      <Paper sx={{ my:3 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} container justifyContent="flex-end" alignItems="center" sx={{ p: 2 }}>
            <Typography variant="h6" textAlign='center'>
              Blob Mania is a multiplayer 2D shooter! Each player is given 5 lives. Shoot the other player while dodging their attacks to win!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} container justifyContent="flex-start" alignItems="center">
            <img src={blobmania} width='80%' height='auto' style={{ borderRadius: '25px' }} className='me' alt="Blob Mania" />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Grid item>
            <Button>Deployed Site</Button>
          </Grid>
          <Grid item>
            <Button>GitHub</Button>
          </Grid>
        </Grid>
      </Paper>
      {/* Third Project */}
      <Paper sx={{ my:3 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} container justifyContent="flex-end" alignItems="center" sx={{ p: 2 }}>
            <Typography variant="h6" textAlign='center'>
              Blob Mania is a multiplayer 2D shooter! Each player is given 5 lives. Shoot the other player while dodging their attacks to win!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} container justifyContent="flex-start" alignItems="center">
            <img src={blobmania} width='80%' height='auto' style={{ borderRadius: '25px' }} className='me' alt="Blob Mania" />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Grid item>
            <Button>Deployed Site</Button>
          </Grid>
          <Grid item>
            <Button>GitHub</Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}