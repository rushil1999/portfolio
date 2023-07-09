import { Button, Container, Grid, Typography, createTheme, responsiveFontSizes, useMediaQuery } from '@mui/material';
import React from 'react';
import CodingSVGElement from '../codingSVGElement';
import { peronalDetails } from './utils/personalDetails';
import { introductionCardBackngroundStyle } from '../../styles/introduction';
import { ThemeProvider } from '@mui/system';
import { GitHub, LinkRounded, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';


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

  // const LightTooltip = styled(({ className, ...props }) => (
  //   <Tooltip {...props} classes={{ popper: className }} />
  // ))(({ theme }) => ({
  //   [`& .${tooltipClasses.tooltip}`]: {
  //     backgroundColor: theme.palette.common.white,
  //     color: 'rgba(0, 0, 0, 0.87)',
  //     boxShadow: theme.shadows[1],
  //     fontSize: 11,
  //   },
  // }));

  let theme = createTheme({
  });

  theme = responsiveFontSizes(theme);
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={introductionCardBackngroundStyle}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography
            variant="h1"
            noWrap={true}
            align={'center'}
            sx={{ fontFamily: 'cursive', fontStyle: 'italic', color: "#FFFFFF" }}
          >
            {name}
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1 }}
              whileHover={{ scale: [null, 1.5, 1.4] }}
            >
              <Container maxWidth="sm" style={{ padding: '15px' }}>
                <CodingSVGElement />
              </Container>
            </motion.div>
          </Grid>
          <Grid item md={6}>
            <Container sx={{
              color: '#FFFFFF',
              textAlign: 'center',
              paddingTop: matches ? '100px' : '0px',
              paddingBottom: matches ? '0px' : '40px'
            }}
              maxWidth="sm"
            >
              <motion.div
                initial={{ x: "100%" }}
                whileInView={{ x: "0%" }}
                transition={{ duration: 1 }}
              >
                <Typography
                  variant="h4"
                >
                  {summary}
                </Typography>
              </motion.div>

            </Container>
            <motion.div
              initial={{ x: "100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1 }}
            >
              <Grid container sx={{ textAlign: 'center', paddingTop: '20px' }}>
                <Grid item xs={12} md={12} lg={12}>
                  <motion.div
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button onClick={redirectToResumePage} size="large" variant="contained" color="secondary" >Resume</Button>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={12} lg={12} sx={{ paddingTop: '25px', justifyContent: 'center' }} >
                  <Grid container sx={{ justifyContent: 'center', paddingTop: '20px' }}>
                    <motion.div
                      whileHover={{ scale: [null, 1.5, 1.4] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button color='inherit' onClick={redirectToGithub}>
                        <GitHub sx={{ fontSize: { xs: 40, sm: 40, md: 50, lg: 60 }, color: '#FFFFFF' }} />
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: [null, 1.5, 1.4] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button color='inherit' onClick={redirectToLinkedin}>
                        <LinkedIn sx={{ fontSize: { xs: 40, sm: 40, md: 50, lg: 60 }, color: '#FFFFFF' }} />
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: [null, 1.5, 1.4] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button color='inherit' onClick={redirectToBlogpost}>
                        <LinkRounded sx={{ fontSize: { xs: 40, sm: 40, md: 50, lg: 60 }, color: '#FFFFFF' }} />
                      </Button>
                    </motion.div>
                  </Grid>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>

        </Grid>
      </Grid >
    </ThemeProvider >
  );

}

export default Introduction;