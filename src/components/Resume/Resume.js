import React from 'react';
import { Typography, Grid, Link } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import resume from '../../assets/alinabadillo-resume.docx';

function Resume() {
  return (
    <Grid container justifyContent="center" textAlign="center" sx={{ my:8, px:5, mt:8 }} id="Resume">
      <Grid item xs={12}>
        <Typography variant="h4" textAlign='center'>
          Resume
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ mt:4}}>
        <Typography variant="h5">
          My Skills:
        </Typography>
        <Typography variant="h6" sx={{ p:2, lineHeight: "2" }}>
          Node.js, Express.js, JavaScript, React.js, HTML5, CSS3, Bootstrap, jQuery, REST API, API, OOP (Object Oriented Programming), ORM (Object Relational Mapping), MVC (Model-View-Controller), SQL, NoSQL, MySQL, Sequelize, Insomnia, MongoDB, Mongoose, Apollo GraphQL, Git, GitHub.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ mt:4}}>
        <Typography variant="h5">
          Download Resume Here:
        </Typography>
        <Link href={resume} download variant="linkicon2">
          <SaveAltIcon sx={{ fontSize: 80, mt:4 }} />
        </Link>
      </Grid>
  </Grid>
  );
}

export default Resume;