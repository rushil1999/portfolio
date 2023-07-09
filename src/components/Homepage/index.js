import React from 'react';
import Introduction from '../Introduction';
import Experience from '../Experience';
import Contact from '../Contact';
import Overview from '../Skills';


const Homepage = () => {
  return (
    <div style={{
      border: 'none'

    }}>
      <Introduction />
      <Overview />
      <Experience />


      {/* <Contact /> */}



    </div>


  );
}

export default Homepage;