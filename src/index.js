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
          // borderRadius: '8px',
          // background: 'linear-gradient(to right, #00e5ff, #ff1744)',
          // color: '#0d0d0d',
          // fontWeight: 600,
          // transition: 'all 0.3s ease-in-out',
          // '&:hover': {
          //   background: 'linear-gradient(to right, #ff1744, #00e5ff)',
          //   boxShadow: '0 0 10px #ff1744, 0 0 20px #00e5ff',
          // },
          backgroundColor: '#222831',
          color: '#00d4a0',
          borderColor: '#00d4a055',
          '&:hover': {
            backgroundColor: '#1a1f26',
            borderColor: '#00d4a0',
            boxShadow: '0 0 8px #00d4a088',
          }
        },
      },
    },
    MuiCard: {
      // styleOverrides: {
      //   root: {
      //     background: 'linear-gradient(145deg, #1a1a1a, #111)',
      //     color: '#00d4a055',
      //     border: '1px solid #333',
      //     boxShadow: '0 0 10px #00f2ff33, 0 0 20px #00f2ff11',
      //     borderRadius: '16px',
      //     maxWidth: 400,
      //     margin: 'auto',
      //     transition: 'transform 0.3s ease',
      //     '&:hover': {
      //       transform: 'scale(1.03)',
      //       boxShadow: '0 0 12px #00f2ff55, 0 0 24px #00f2ff22',
      //     },
      //   },
      // },
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.03)', // Subtle dark glassy look
          border: '1px solid #00d4a033',           // Soft teal border
          borderRadius: '16px',
          boxShadow: '0 0 20px #00d4a022',         // Teal glow
          backdropFilter: 'blur(6px)',             // Glassmorphism effect
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 0 30px #00d4a055',
            border: '1px solid #00d4a055',
          },
        },
      },
      
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
