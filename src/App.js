import './App.css';
import React, {useState} from 'react';
import IntroductionV2 from './components/IntroductionV2';
// import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Chat from './components/Chat';
import Project from './components/Projects';
import { Paper} from '@mui/material';



function App() {

  const [initiateVini, setInitiateVini] = useState(false)
  return (
    <Paper >
      <IntroductionV2 setIniateVini={setInitiateVini} initiateVini={initiateVini}/>
      <Experience/>
      <Project />
      {initiateVini && (
        <Chat setInitiateVini={setInitiateVini}/>
      )}
      
    </Paper>
  );
}

export default App;
