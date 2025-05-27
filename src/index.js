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
      default: '#0d0d0d',
      paper: 'linear-gradient(to bottom right, #1a1a1a, #262626)',
    },
    primary: {
      main: '#00e5ff', // Electric Cyan
    },
    secondary: {
      main: '#ff1744', // Deep Red
    },
    text: {
      primary: '#e0f2f1',
      secondary: '#a7ffeb',
    },
    divider: '#2e2e2e',
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 600,
      letterSpacing: '0.1em',
    },
    h6: {
      color:' #e0f2f1'
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to right, #1a1a1a, #262626)',
          // borderRadius: '12px',
          // boxShadow: '0 0 10px rgba(0, 229, 255, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          padding: '8px 24px',
          fontWeight: 500,
          textTransform: 'none',
          backgroundColor: 'rgba(0, 212, 160, 0.15)', // slightly brighter fill
          color: '#aefcef', // lighter teal text
          border: '1px solid rgba(0, 212, 160, 0.4)',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(0, 212, 160, 0.25)',
            borderColor: '#00ffe0',
            color: '#e0ffff',
          },
        },
    
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1a1a1a, #222)',
          border: '1px solid #2e2e2e',
          borderRadius: '16px',
          boxShadow: '0 0 20px rgba(0, 212, 160, 0.2)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 0 30px rgba(0, 212, 160, 0.4)',
          },
        },
      },
      // styleOverrides: {
      //   root: {
      //     background: 'linear-gradient(145deg, #1a1a1a, #222)',
      //     border: '1px solid #2e2e2e',
      //     borderRadius: '16px',
      //     boxShadow: '0 0 20px rgba(255, 60, 56, 0.2)',
      //     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      //     '&:hover': {
      //       transform: 'translateY(-4px)',
      //       boxShadow: '0 0 30px rgba(255, 60, 56, 0.4)',
      //     },
      //   },
      // },
      
    },
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
