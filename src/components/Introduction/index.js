import { Button, Container, Stack } from '@mui/material';
import React from 'react';
import CodingSVGElement from '../codingSVGElement';
import { peronalDetails } from './utils/personalDetails';
import { contentStyle, introductionCardBackngroundStyle } from '../../styles/introduction';

const Introduction = () => {
  const { name, summary } = peronalDetails;
  const redirectToResumePage = () => {
    window.open('https://rushil1999.github.io/portfolio/Resume.pdf', "_blank", "noreferrer");
  }
  return (
    <div
      style={introductionCardBackngroundStyle}>
      <Stack direction={"row"}>
        <Container maxWidth="sm" style={{ padding: '15px' }}>
          <CodingSVGElement />
        </Container>
        <Container maxWidth="sm">
          <div style={contentStyle}>
            <h1 style={{ fontFamily: 'cursive' }}>
              {name}
            </h1>
            <div>
              {summary}
            </div>
          </div>
        </Container>
      </Stack>
      <div style={{ textAlign: 'center' }}>
        <Button onClick={redirectToResumePage} size="large" variant="contained" color="secondary" >Resume</Button>
      </div>
    </div >
  );

}

export default Introduction;