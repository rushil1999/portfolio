import React from 'react';
import { Card, Container, Grid, Stack, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import { skillsCardBackgroundStyle, skillsSectionStyle } from '../../styles/skills';
import SkillsSVGElement from '../skillsSVGElement';
import { skillsInformation } from './utils/skillsInformation';
import CodingSVGElement from '../codingSVGElement';

const Skills = () => {

  let theme = createTheme({});
  theme = responsiveFontSizes(theme);
  const getSkillsHTML = (skills) => {

    const skillPointersHTML = skills.map((skill) => {
      return (
        <li>
          <Typography
            variant="h4"
            sx={{ padding: '1rem' }}
          >
            {skill}
          </Typography>
        </li >
      )
    })
    return (
      <ul>
        {skillPointersHTML}
      </ul>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Card style={skillsCardBackgroundStyle}>
        <Typography
          variant="h2"
          align='center'
          sx={{ fontStyle: 'italic', padding: '35px', color: "#FFFFFF" }}
        >
          Skills
        </Typography>
        <Grid container >
          <Grid item md={6} alignItems={'center'}>
            <Container sx={{ color: "#FFFFFF" }} maxWidth="sm" >
              {getSkillsHTML(skillsInformation)}
            </Container>
          </Grid>
          <Grid item md={6} xs={12} alignItems={'center'}>
            <Container sx={{ padding: '15px' }}>
              <SkillsSVGElement />
            </Container>
          </Grid>

        </Grid>
      </Card>
    </ThemeProvider>
  );

}

export default Skills;
