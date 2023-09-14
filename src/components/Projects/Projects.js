import React from 'react';
import '../../App.css';
import './Projects.css';
import { Paper, Typography, Button, Grid, Link } from '@mui/material';
import blobmania from "../../assets/images/blobmania.png";
import blog from "../../assets/images/blog.png";
import sidekick from "../../assets/images/sidekick.png";

function Projects() {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ p: 5, my:5 }}>
      <Grid item xs={12}>
        <Typography variant="h5" textAlign='center'>
          My Projects
        </Typography>
      </Grid>
      {/* First Project */}
      <Paper sx={{ my:3 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
            <Typography variant="h5" textAlign='center'>
              Blobmania
            </Typography>
            <Typography variant="h6" textAlign='center'>
              A full-stack web multiplayer 2D shooter game. Built with web sockets and Node.js. MySQL is used for login/logout option.
            </Typography>
            <Grid textAlign='center'>
              <Button>JavaScript</Button>
              <Button>Node.js</Button>
              <Button>Bootstrap</Button>
              <Button>Handlebars</Button>
              <Button>MySQL</Button>
              <Button>Express.js</Button>
              <Button>Sequelize</Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
            <img src={blobmania} width='80%' height='auto' style={{ borderRadius: '25px' }} className='me' alt="Blob Mania" />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Link href="https://blob-mania-322037286e7b.herokuapp.com/">
            <Button>Deployed Site</Button>
          </Link>
          <Link href="https://github.com/AlinaB108/blob-mania">
            <Button>GitHub</Button>
          </Link>
        </Grid>
      </Paper>
      {/* Second Project */}
      <Paper sx={{ my:3 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
            <Typography variant="h5" textAlign='center'>
              MVC Tech Blog
            </Typography>
            <Typography variant="h6" textAlign='center'>
            A CMS-style blog site following the MVC architectural pattern. This site allows users to create their own posts and engage in discussions on other users' content.
            </Typography>
            <Grid textAlign='center'>
              <Button>JavaScript</Button>
              <Button>Node.js</Button>
              <Button>Bootstrap</Button>
              <Button>MySQL</Button>
              <Button>Express.js</Button>
              <Button>Sequelize</Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
            <img src={blog} width='80%' height='auto' style={{ borderRadius: '25px' }} className='me' alt="Blob Mania" />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Link href="https://mvc-tech-blogab-928389db966f.herokuapp.com/">
            <Button>Deployed Site</Button>
          </Link>
          <Link href="https://github.com/AlinaB108/MVC-tech-blog">
            <Button>GitHub</Button>
          </Link>
        </Grid>
      </Paper>
      {/* Third Project */}
      <Paper sx={{ my:3 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
            <Typography variant="h5" textAlign='center'>
              Sidekick
            </Typography>
            <Typography variant="h6" textAlign='center'>
              A full-stack app which offers a landing site and a POS system for a restaurant. POS system includes client and server sides. The database is connected to the cloud. 
            </Typography>
            <Grid textAlign='center'>
              <Button>JavaScript</Button>
              <Button>React</Button>
              <Button>Graphql</Button>
              <Button>MongoDB</Button>
              <Button>JWT</Button>
              <Button>Material UI</Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
            <img src={sidekick} width='80%' height='auto' style={{ borderRadius: '25px' }} className='me' alt="Blob Mania" />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Link href="https://sidekick-pos-a138f104c04c.herokuapp.com/pos">
            <Button>Deployed Site</Button>
          </Link>
          <Link href="https://github.com/AlinaB108/pos-system-5000">
            <Button>GitHub</Button>
          </Link>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Projects;