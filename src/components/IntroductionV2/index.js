import { Card, Container, Grid, Paper, CardMedia, Button, Typography, createTheme, responsiveFontSizes, useMediaQuery } from '@mui/material';
import React from 'react'
import Company from '../Company';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent/TimelineOppositeContent';
import { motion } from 'framer-motion';
import { companyDetails } from './utils/companyInformation';
import { personalDetails } from './utils/personalDetails';
import { useTheme } from '@emotion/react';
import self from '../../assets/suitup.jpg';
import { GitHub, LinkRounded, LinkedIn } from '@mui/icons-material';



export default function Experience() {
  let theme = useTheme();

  theme = responsiveFontSizes(theme)
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const { name, summary } = personalDetails;

  const redirectToResumePage = () => {
    window.open('https://rushil1999.github.io/portfolio/Resume.pdf', "_blank", "noreferrer");
  }
  const redirectToGithub = () => {
    window.open('https://github.com/rushil1999', "_blank", "noreferrer");
  }
  const redirectToLinkedin = () => {
    window.open('https://linkedin.com/in/rushil1999', "_blank", "noreferrer");
  }
  const redirectToBlogpost = () => {
    window.open('https://medium.com/@rushil1999.dev', "_blank", "noreferrer");
  }

  const redirectToLeetcodePage = () => {
    window.open('https://leetcode.com/rushil1999/', "_blank", "noreferrer");
  }
  return (
      <Paper
        sx={{
          minHeight: '100vh',           
        }}
      >
        <Typography
          variant="h1"
          align='center'
          sx={{ 
            fontStyle: 'bold', 
            padding: '35px',
            mb:10,
          }}
        >
          {name}
        </Typography>
        <Container maxWidth="lg" sx={{ flexGrow: 1 }} alignItems="center">
        <Grid
          container
          spacing={8}
          alignItems="flex-start"
          justifyContent="center"
        >
          <Grid item xs={12} md={5}>
            <Card sx={{ borderRadius: 20 }}>
              <CardMedia
              component="img"
              height="550"
              image={self}
              alt="img"
            />
          </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography sx={{
              textAlign: 'center', 
              color: theme.palette.text.primary
              
            }} 
            variant="h5">
            {summary}
            </Typography>
            <motion.div
              initial={{ x: "100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1 }}
            >
              <Grid item container sx={{ textAlign: 'center', paddingTop: '60px'}} spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                  <motion.div
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button onClick={redirectToResumePage} size="large" variant="contained"  >Resume</Button>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <motion.div
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button onClick={redirectToLeetcodePage} size="large" variant="contained" >DSA Journey</Button>
                  </motion.div>
                </Grid>

                <Grid 
                  item xs={12} md={12} lg={12} 
                  
                  sx={{ paddingTop: '25px', justifyContent: 'center' }} >
                  <Grid container sx={{ justifyContent: 'center', paddingTop: '20px'}}>
                    <motion.div
                      whileHover={{ scale: [null, 1.5, 1.4] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button color='inherit' onClick={redirectToGithub}>
                        <GitHub sx={{ fontSize: { xs: 40, sm: 40, md: 50, lg: 60 }, color: 'text.primary' }} />
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: [null, 1.5, 1.4] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button color='inherit' onClick={redirectToLinkedin}>
                        <LinkedIn sx={{ fontSize: { xs: 40, sm: 40, md: 50, lg: 60 }, color: 'text.primary' }} />
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: [null, 1.5, 1.4] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button color='inherit' onClick={redirectToBlogpost}>
                        <LinkRounded sx={{ fontSize: { xs: 40, sm: 40, md: 50, lg: 60 }, color: 'text.primary' }} />
                      </Button>
                    </motion.div>
                  </Grid>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
          
        </Grid>
      </Container>
      </Paper >
  );
}


// sx={{ float: `${companyCardAlignmet}` }}


{/* <Grid container>
                            <Grid item xs={12}>
                              <Typography
                                variant={'h5'}
                                sx={{ color: "#4dff4d", paddingRight: '15px' }}
                              >
                                {duration}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <TechStack companyName={companyName} companyCardAlignment={companyCardAlignmet} />
                            </Grid>
                          </Grid> */}