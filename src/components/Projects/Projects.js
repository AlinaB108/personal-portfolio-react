import React from 'react';
import { Paper, Typography, Button, Grid, Link } from '@mui/material';
import blobmania from "../../assets/images/blobmania.png";
import blog from "../../assets/images/blog.png";
import sidekick from "../../assets/images/sidekick.png";

function Projects() {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ p: 5, my:5 }} id="Projects">
      <Grid item xs={12}>
        <Typography variant="h4" textAlign='center'>
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
            <Typography variant="h6" textAlign='center' sx={{ p:2 }}>
              A full-stack web multiplayer 2D shooter game. Built with web sockets and Node.js. MySQL is used for login/logout option.
            </Typography>
            <Grid textAlign='center'>
              <Button variant="skill">JavaScript</Button>
              <Button variant="skill">Node.js</Button>
              <Button variant="skill">Bootstrap</Button>
              <Button variant="skill">Handlebars</Button>
              <Button variant="skill">MySQL</Button>
              <Button variant="skill">Express.js</Button>
              <Button variant="skill">Sequelize</Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
            <img src={blobmania} alt="Screenshots of my app" width='80%' height='auto' style={{ borderRadius: '25px' }} className='me' />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Link href="https://blob-mania-322037286e7b.herokuapp.com/">
            <Button variant="action" sx={{ my:2 }}>Deployed Site</Button>
          </Link>
          <Link href="https://github.com/AlinaB108/blob-mania">
            <Button variant="action" sx={{ m:2 }}>GitHub</Button>
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
            <Typography variant="h6" textAlign='center' sx={{ p:2 }}>
            A CMS-style blog site following the MVC architectural pattern. This site allows users to create their own posts and engage in discussions on other users' content.
            </Typography>
            <Grid textAlign='center'>
              <Button variant="skill">JavaScript</Button>
              <Button variant="skill">Node.js</Button>
              <Button variant="skill">Bootstrap</Button>
              <Button variant="skill">MySQL</Button>
              <Button variant="skill">Express.js</Button>
              <Button variant="skill">Sequelize</Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
            <img src={blog} alt="Screenshots of my app" width='80%' height='auto' style={{ borderRadius: '25px' }} className='me' />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Link href="https://mvc-tech-blogab-928389db966f.herokuapp.com/">
            <Button variant="action" sx={{ my:2 }}>Deployed Site</Button>
          </Link>
          <Link href="https://github.com/AlinaB108/MVC-tech-blog">
            <Button variant="action" sx={{ m:2 }}>GitHub</Button>
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
            <Typography variant="h6" textAlign='center' sx={{ p:2 }}>
              A full-stack app which offers a landing site and a POS system for a restaurant. POS system includes client and server sides. The database is connected to the cloud. 
            </Typography>
            <Grid textAlign='center'>
              <Button variant="skill">JavaScript</Button>
              <Button variant="skill">React</Button>
              <Button variant="skill">Graphql</Button>
              <Button variant="skill">MongoDB</Button>
              <Button variant="skill">JWT</Button>
              <Button variant="skill">Material UI</Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
            <img src={sidekick} alt="Screenshots of my app" width='80%' height='auto' style={{ borderRadius: '25px' }} className='me' />
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="center" >
          <Link href="https://sidekick-pos-a138f104c04c.herokuapp.com/pos">
            <Button variant="action" sx={{ my:2 }}>Deployed Site</Button>
          </Link>
          <Link href="https://github.com/AlinaB108/pos-system-5000">
            <Button variant="action" sx={{ m:2 }}>GitHub</Button>
          </Link>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Projects;