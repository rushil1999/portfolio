import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));
let theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0D0D0D',
      paper: '#1A1A1A',
    },
    primary: {
      main: '#00E5FF',
    },
    secondary: {
      main: '#FF4081',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#9E9E9E',
    },
  },
  typography: {
    fontFamily: `'Rajdhani', 'Roboto Mono', 'Arial', sans-serif`,
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
