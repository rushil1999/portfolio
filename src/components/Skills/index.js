import React from 'react';
import { Button, Card, Container, Grid, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import { skillsCardBackgroundStyle, } from '../../styles/skills';
import SkillsSVGElement from '../skillsSVGElement';
import { overviewInformation } from './utils/skillsInformation';
import { motion } from 'framer-motion';

const Overview = () => {

  let theme = createTheme({});
  theme = responsiveFontSizes(theme);
  const redirectToLeetcodePage = () => {
    window.open('https://leetcode.com/rushil1999/', "_blank", "noreferrer");
  }
  const getSkillsHTML = (skills) => {

    const skillPointersHTML = skills.map((skill) => {
      return (
        <li>
          <Typography
            variant="h4"
            sx={{ paddingTop: '2rem' }}
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
          Overview
        </Typography>
        <Grid container >
          <Grid item md={6} lg={6} alignItems={'center'}>
            <motion.div
              initial={{ x: '-100%' }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1 }}
            >
              <Container sx={{ color: "#FFFFFF" }} maxWidth="md" >
                {getSkillsHTML(overviewInformation)}
              </Container>
            </motion.div>
          </Grid>
          {/* <Grid item md={6} xs={12} alignItems={'center'}>

            <motion.div
              initial={{ x: '100%' }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1 }}
              whileHover={{ scale: [null, 1.5, 1.4] }}

            >
              <Container sx={{ padding: '15px' }}>
                <SkillsSVGElement />
              </Container>
            </motion.div>
          </Grid> */}


        </Grid>
        <Grid container sx={{ justifyContent: 'center', paddingTop: '20px', paddingBottom: '100px' }}>
          <motion.div
            animate={{
              scale: [1, 1.5, 1.5, 1, 1],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <Button onClick={redirectToLeetcodePage} size="large" variant="contained" color="secondary" >DSA Journey</Button>
          </motion.div>
        </Grid>
      </Card>
    </ThemeProvider >
  );

}

export default Overview;
