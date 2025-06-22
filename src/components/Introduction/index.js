import { Button, Box, Container, Grid, Typography, createTheme, responsiveFontSizes, useMediaQuery, Paper } from '@mui/material';
import React from 'react';
import CodingSVGElement from '../codingSVGElement';
import self from '../../assets/suitup.jpg';
import { peronalDetails } from './utils/personalDetails';
import { introductionCardBackngroundStyle } from '../../styles/introduction';

import { CardMedia, Card } from '@mui/material';
import { GitHub, LinkRounded, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@emotion/react';



const Introduction = () => {
  const { name, summary } = peronalDetails;
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

  let theme = useTheme();

  return (
    <Box> 
      {/* Name at the top center */}
      <Box sx={{ py: 4, textAlign: 'center', mb:10, color: theme.palette.text.primary }}>
        <Typography variant="h2">
        {name}
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={8}
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
          <Grid item xs={12} md={7} margin={"auto"} >
            <Typography 
              sx={{
                textAlign: 'center', 
                color: theme.palette.text.primary
              }} 
              variant="h5"
            >
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
                    <Button onClick={redirectToResumePage} size="large" variant="contained" sx={{color: "#ffffff"}} >Resume</Button>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <motion.div
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button onClick={redirectToLeetcodePage} size="large" variant="contained" color="secondary" >DSA Journey</Button>
                  </motion.div>
                </Grid>

                <Grid 
                  sx={{ paddingTop: '25px', justifyContent: 'center' }} >
                  <Grid container sx={{ justifyContent: 'center', paddingTop: '20px' }}>
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
    </Box>
  );

}

export default Introduction;