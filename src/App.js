import './App.css';
import React from 'react';
import IntroductionV2 from './components/IntroductionV2';
// import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Chat from './components/Chat';
import Project from './components/Projects';
import { Paper} from '@mui/material';



function App() {
  return (
    <Paper >
      <IntroductionV2 />
      <Experience/>
      <Project />
      {/* <Chat/> */}
    </Paper>
  );
}

export default App;
