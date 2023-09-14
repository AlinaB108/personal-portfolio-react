import React from 'react';
import './About.css';
import { Typography, Grid } from '@mui/material';
import wintersummer from "../../assets/images/wintersummer.jpg";

export default function About() {
  return (
    <Grid container justifyContent="center" textAlign="center" sx={{ my:5, px:5, mt:18 }} id="About">
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" sx={{ p:2 }}>
          About
        </Typography>
        <Typography variant="h5">
          Alina Badillo - Web Developer
        </Typography>
        <Typography variant="h6">
          A Siberian who lives in Texas.
        </Typography>
        <Typography variant="h6" sx={{ p:2 }}>
        My love for computers and technology has existed since I was first introduced to them by my uncle as a young child. 
        Growing up, I have enjoyed spending countless hours in front of the screen, learning, playing and expanding my knowledge in any and all interests. 
        Even though I received an education in languages, I decided to pursue my passion and become a Web Developer.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid sx={{ mt:2 }}>
        <img src={wintersummer} width='60%' height='auto' style={{ borderRadius: '25px'}} className='me'/>
        </Grid>
      </Grid>
    </Grid>
  );
}