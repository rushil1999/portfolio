import { Button, Container, Grid, Stack, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import React from 'react';
import CodingSVGElement from '../codingSVGElement';
import { peronalDetails } from './utils/personalDetails';
import { contentStyle, introductionCardBackngroundStyle } from '../../styles/introduction';
import { ThemeProvider, breakpoints } from '@mui/system';

const Introduction = () => {
  const { name, summary } = peronalDetails;
  const redirectToResumePage = () => {
    window.open('https://rushil1999.github.io/portfolio/Resume.pdf', "_blank", "noreferrer");
  }

  let theme = createTheme({
  });
  theme = responsiveFontSizes(theme)
  return (
    <ThemeProvider theme={theme}>
      <div
        style={introductionCardBackngroundStyle}>
        <Typography
          variant="h1"
          noWrap={true}
          align={'center'}
          sx={{ fontFamily: 'cursive', fontStyle: 'italic', color: "#FFFFFF" }}
        >
          {name}
        </Typography>;
        <Grid container>
          <Grid item xs={12} md={6}>
            <Container maxWidth="sm" style={{ padding: '15px' }}>
              <CodingSVGElement />
            </Container>
          </Grid>
          <Grid item md={6}>
            <Container style={contentStyle} maxWidth="sm">
              <Typography
                variant="h4"
              >
                {summary}
              </Typography>
            </Container>
          </Grid>
        </Grid>
        <Container style={{ textAlign: 'center' }}>
          <Button onClick={redirectToResumePage} size="large" variant="contained" color="secondary" >Resume</Button>
        </Container>
      </div >
    </ThemeProvider >
  );

}

export default Introduction;