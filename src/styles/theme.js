// import { WrapText } from '@mui/icons-material';
import {createTheme, responsiveFontSizes } from '@mui/material';

const theme = createTheme({
  palette: {
      primary: {
          main: '#23296c'
      },
      secondary: {
          main: '#d4e1f1'
      },
      accent: {
          main: '#FCE698'
      },
      background: {
          default: '#f2f4f3',
          paper: '#fff',
          paper2: '#dfbbda'
      },
      text: {
          primary: '#000',
          secondary: '#fff',
      },
  },
  components: {
      MuiLink: {
          variants: [
              {
                  props: { variant: 'linkicon'},
                  style: {
                      color: '#fff',
                      fontFamily: 'nunito',
                      fontSize: '1.1rem',
                      fontWeight: 'normal',
                      textDecoration: 'none',
                      margin: '1rem',
                      "&:hover":{
                          textShadow: '#fff -1.2px 0.3px',
                      }
                  }
              },
              {
                props: { variant: 'linkicon2'},
                style: {
                    color: '#896790',

                    margin: '1rem',
                    "&:hover":{
                        color: 'rgba(119, 86, 126, 1.0)',
                    }
                }
            }
      ]
      },
      MuiButton: {
          variants: [
              {
                props: { variant: 'action', color: 'primary' },
                style: {
                    background: '#896790',
                    color: '#fff',
                    width: '100%',
                    height: '2.5rem',
                    "&:hover":{
                        background: 'rgba(119, 86, 126, 1.0)',
                        }
                    }
              },
              {
                props: { variant: 'skill', color: 'primary' },
                style: {
                    background: '#dfbbda',
                    color: '#000',
                    height: '2.3rem',
                    margin: '2px',
                    "&:hover":{
                        background: 'rgba(208, 153, 200, 1.0)',
                        }
                    }
              }
          ]
      }
  },
  typography: {
      innerText: {
        fontFamily: ['"Raleway"', 'sans-serif]'].join(','),
        fontSize: '1rem'
      },
      h2: {
        color: '#896790',
        fontFamily: ['"Press Start 2P"', 'cursive'].join(','),
        fontSize: '30px'
      },
      h4: {
        color: '#896790',
        fontFamily: ['"Marcellus"', 'serif'].join(','),
      },
      h5: {
        color: '#896790',
        fontFamily: ['"Catamaran"', 'sans-serif'].join(','),
        fontSize: '20px'
      },
      h6: {
        color: '#000',
        fontFamily: ['"Catamaran"', 'sans-serif'].join(','),
      }
  }
})

export default responsiveFontSizes(theme);