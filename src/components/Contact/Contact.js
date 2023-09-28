import React, { useState, useRef } from 'react';
import { Button, TextField, Typography, Grid, Container, Paper } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4zjzxzu', 'template_z02efpp', form.current, 'URrMI2cDKqVu6G4JK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mb:10 }} id="Contacts">
      <Grid item xs={12} sx={{ m:4 }}>
        <Typography variant="h4" textAlign='center'>
          Contacts
        </Typography>
      </Grid>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" align="center" sx={{ mb:2 }}>
          Contact Me
        </Typography>
        <form ref={form} onSubmit={sendEmail}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="user_name"
                variant="outlined"
                onChange={handleChange}
                required
                InputLabelProps={{
                  style: { color: 'black', opacity: 1 }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth
                label="Email"
                name="user_email"
                variant="outlined"
                onChange={handleChange}
                type="email"
                required
                InputLabelProps={{
                  style: { color: 'black', opacity: 1 }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                variant="outlined"
                onChange={handleChange}
                multiline
                rows={4}
                required
                InputLabelProps={{
                  style: { color: 'black', opacity: 1 }
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="action"
            color="primary"
            style={{ marginTop: '20px' }}
          >
            Send
          </Button>
        </form>

      </Paper>
    </Container>
  );
};

export default ContactForm;