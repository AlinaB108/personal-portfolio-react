import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// const root = ReactDOM.createRoot(document.getElementById('root'));
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme = {theme}>
  <CssBaseline/>
      <App />
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
