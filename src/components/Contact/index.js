import React from 'react';
import SocialMediaSVGElement from '../socialMediaSVGElement';
import { Button, Card, Container, Stack } from '@mui/material';
import { contactCardBackgroundStyle } from '../../styles/contact';
import { experienceTitleStyle } from '../../styles/experience';
import { Email, GitHub, LinkOff, LinkedIn } from '@mui/icons-material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const Contact = () => {
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
    <Card style={contactCardBackgroundStyle}>
      <div style={experienceTitleStyle}>
        <h1 >
          Contact Me
        </h1>
      </div>
      <Stack direction={"row"}>
        <Container maxWidth="sm">
          <div style={{ margin: 'auto', fontSize: 'xx-large', fontStyle: 'italic', padding: '15px', color: "#FFFFFF" }}>

            <div>
              You can reach out to me on.
            </div>
            <Stack style={{ paddingTop: '30px' }} direction={"row"} spacing={5}>
              <Button color='inherit' onClick={redirectToGithub}>
                <GitHub sx={{ fontSize: 60 }} />
              </Button>
              <LightTooltip title='shahrushil1999@gmail.com'>
                <Email sx={{ fontSize: 60 }} />
              </LightTooltip>
              <Button color='inherit' onClick={redirectToLinkedin}>
                <LinkedIn sx={{ fontSize: 60 }} />
              </Button>
              <Button color='inherit' onClick={redirectToBlogpost}>
                <LinkOff sx={{ fontSize: 60 }} />
              </Button>
            </Stack>

          </div>
        </Container>
        <Container maxWidth="sm" style={{ padding: '15px' }}>
          <SocialMediaSVGElement />
        </Container>
      </Stack>
    </Card>
  );

}

export default Contact;