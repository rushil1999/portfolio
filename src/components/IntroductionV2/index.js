import { Card, 
  Container, 
  Grid, 
  Box, 
  CardMedia, 
  Button, 
  Typography, 
  responsiveFontSizes, 
  useMediaQuery,
  Divider
} from '@mui/material';
import React from 'react'
import { personalDetails } from './utils/personalDetails';
import { useTheme } from '@emotion/react';
import self from '../../assets/suitup.jpg';
import { GitHub, LinkRounded, LinkedIn } from '@mui/icons-material';



export default function IntroductionV2({initiateVini, setIniateVini}) {
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
  const handlerInitiateVini = () => {
    console.log(initiateVini, !initiateVini)
    setIniateVini(!initiateVini);
  }
  return (
      <Box
        sx={{
        minHeight: '100vh',     
        width: "100%",   // full width     
        }}
      >
        <Divider sx={{ padding: '35px', mb: 10}}>
          <Typography
            variant="h1"
            align='center'
            sx={{ 
              fontStyle: 'bold', 
              
            }}
          >
            {name}
          </Typography>
        </Divider>
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
          <Grid item xs={12} md={7} sx={{margin: 'auto'}}>
            <Typography sx={{
              textAlign: 'center', 
              color: theme.palette.text.primary
              
            }} 
            variant="h5">
            {summary}
            </Typography>
              <Grid item container sx={{ textAlign: 'center', paddingTop: '60px'}} spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                    <Button onClick={redirectToResumePage} size="large" variant="contained"  >Resume</Button>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Button onClick={redirectToLeetcodePage} size="large" variant="contained" >DSA Journey</Button>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Button disabled={true} onClick={handlerInitiateVini} size="large" variant="contained">
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Typography variant="button" sx={{ fontSize: '1rem' }}>
                        Vini
                      </Typography>
                      <Typography variant="caption" sx={{ fontSize: '0.75rem', opacity: 0.7 }}>
                        Chatbot Coming Soon
                      </Typography>
                    </Box>
                  </Button>
                </Grid>
                <Grid 
                  item xs={12} md={12} lg={12} 
                  sx={{ paddingTop: '25px', justifyContent: 'center' }} >
                  <Grid container gap={4}sx={{ justifyContent: 'center', paddingTop: '20px'}}>
                      <Button color='inherit' onClick={redirectToGithub}>
                        <GitHub sx={{ fontSize: { xs: 40, sm: 40, md: 50, lg: 60 }, color: 'text.primary' }} />
                      </Button>
                      <Button color='inherit' onClick={redirectToLinkedin}>
                        <LinkedIn sx={{ fontSize: { xs: 40, sm: 40, md: 50, lg: 60 }, color: 'text.primary' }} />
                      </Button>
                      <Button color='inherit' onClick={redirectToBlogpost}>
                        <LinkRounded sx={{ fontSize: { xs: 40, sm: 40, md: 50, lg: 60 }, color: 'text.primary' }} />
                      </Button>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Container>
      </Box >
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