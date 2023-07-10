import React from 'react';
import Introduction from '../Introduction';
import Experience from '../Experience';
import Contact from '../Contact';
import Overview from '../Overview';
import Project from '../Projects';


const Homepage = () => {
  return (
    <div style={{
      border: 'none'

    }}>
      <Introduction />
      <Overview />
      <Experience />
      <Project />
      {/* <Contact /> */}


      {/* <Contact /> */}



    </div>


  );
}

export default Homepage;