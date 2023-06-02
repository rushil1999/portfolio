import { Container, Stack } from '@mui/material';
import React from 'react';
import CodingSVGElement from '../codingSVGElement';

const Introduction = () => {
  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '20rem',
        backgroundImage: `linear-gradient(${0}deg, ${'#30BE96'}, ${'#402565'})`
      }}>
      <Stack direction={"row"}>
        <Container maxWidth="sm" style={{ padding: '15px' }}>
          <CodingSVGElement />
        </Container>
        <Container maxWidth="sm">
          <div style={{ margin: 'auto', fontSize: 'xx-large', fontStyle: 'italic', padding: '15px', color: "#FFFFFF" }}>
            <h1 style={{ fontFamily: 'cursive' }}>
              Rushil Shah
            </h1>
            <div>
              A Passionate Backend Developer with experience in varoious technologies like React Node Java Python, etc
            </div>
          </div>
        </Container>
        {/* <Container>
          <GreetingLottie animationPath="coding" />

        </Container> */}


      </Stack>
    </div >
  );

}

export default Introduction;