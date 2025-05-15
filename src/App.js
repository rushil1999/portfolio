import logo from './logo.svg';
import './App.css';
import React from 'react';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Project from './components/Projects';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div style={{
      border: 'none'

    }}>
      <Introduction />
      {/* <Overview /> */}
      <Experience />
      <Project />
      {/* <Contact /> */}


      {/* <Contact /> */}



    </div>
  );
}

export default App;
