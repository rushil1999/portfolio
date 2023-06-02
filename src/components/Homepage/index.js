import React from 'react';
import Introduction from '../Introduction';
import Experience from '../Experience';
import Contact from '../Contact';
import Skills from '../Skills';


const Homepage = () => {
  return (
    <div style={{
      border: 'none'

    }}>
      <Introduction />
      <Experience />
      <Skills />
      <Contact />



    </div>


  );
}

export default Homepage;