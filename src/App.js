import './App.css';
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme';
import IntroductionV2 from './components/IntroductionV2';
import Experience from './components/Experience';
import Chat from './components/Chat';
import Project from './components/Projects';
import Navbar from './components/Navbar';

function App() {
  const [initiateVini, setInitiateVini] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar />
        <Box id="intro">
          <IntroductionV2 setIniateVini={setInitiateVini} initiateVini={initiateVini} />
        </Box>
        <Box id="experience">
          <Experience />
        </Box>
        <Box id="projects">
          <Project />
        </Box>
        {initiateVini && <Chat setInitiateVini={setInitiateVini} />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
