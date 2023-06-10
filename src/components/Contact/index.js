import React from 'react';
import SocialMediaSVGElement from '../socialMediaSVGElement';
import { Button, Card, Container, Grid, Stack, Typography, createTheme } from '@mui/material';
import { contactCardBackgroundStyle } from '../../styles/contact';
import { Email, GitHub, LinkOff, LinkedIn } from '@mui/icons-material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { ThemeProvider, responsiveFontSizes, styled } from '@mui/material/styles';

const Contact = () => {

  let theme = createTheme({});
  theme = responsiveFontSizes(theme);

  const redirectToGithub = () => {
    window.open('https://github.com/rushil1999', "_blank", "noreferrer");
  }
  const redirectToLinkedin = () => {
    window.open('https://linkedin.com/in/rushil1999', "_blank", "noreferrer");
  }
  const redirectToBlogpost = () => {
    window.open('https://medium.com/@rushil1999.dev', "_blank", "noreferrer");
  }


  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  return (
    <ThemeProvider theme={theme}>
      <Card style={contactCardBackgroundStyle}>
        <Typography
          variant="h2"
          align='center'
          sx={{ fontStyle: 'italic', padding: '35px', color: "#FFFFFF" }}
        >
          Contact Me
        </Typography>

        <Grid container>
          <Grid item xs={12} md={6}>
            <Container  >
              <Stack>
                <Grid item xs={12}  >
                  <Container>
                    <Typography
                      variant="h4"
                      align='center'
                      sx={{ fontStyle: 'italic', color: "#FFFFFF" }}
                    >
                      You can reach out to me on.
                    </Typography>
                  </Container>
                </Grid>
                <Grid item xs={12} alignSelf={'center'}>
                  <Container >
                    <Stack style={{ padding: '50px' }} direction={"row"} spacing={3}>
                      <Button color='inherit' onClick={redirectToGithub}>
                        <GitHub sx={{ fontSize: { xs: 40, sm: 40, md: 50, lg: 60 }, color: '#FFFFFF' }} />
                      </Button>
                      <LightTooltip title='shahrushil1999@gmail.com'>
                        <Email sx={{ fontSize: { xs: 40, sm: 40, md: 50, lg: 60 }, color: '#FFFFFF' }} />
                      </LightTooltip>
                      <Button color='inherit' onClick={redirectToLinkedin}>
                        <LinkedIn sx={{ fontSize: { xs: 40, sm: 40, md: 50, lg: 60 }, color: '#FFFFFF' }} />
                      </Button>
                      <Button color='inherit' onClick={redirectToBlogpost}>
                        <LinkOff sx={{ fontSize: { xs: 40, sm: 40, md: 50, lg: 60 }, color: '#FFFFFF' }} />
                      </Button>
                    </Stack>
                  </Container>
                </Grid>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={6}>
            <Container sx={{ padding: '5px' }}>
              <SocialMediaSVGElement />
            </Container>
          </Grid>
        </Grid>
      </Card>
    </ThemeProvider >
  );

}

export default Contact;