import { ThemeProvider } from '@emotion/react';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import React from 'react';
import { companyCardBackgroundStyle } from '../../styles/company';

const ProjectCard = (props) => {

  const { projectName, summary, link, imageLink } = props;
  let theme = createTheme({});
  theme = responsiveFontSizes(theme);


  const redirectToProjectLink = () => {
    window.open(link, "_blank", "noreferrer");
  }

  const getProjectSummary = () => {
    const roleDescriptionHTML = summary.map((description) => {
      return (
        <Typography
          variant="subtitle1"
        >
          {description}
        </Typography>
      )
    })
    return (
      <Container sx={{ textAlign: 'left' }}>
        {roleDescriptionHTML}
      </Container>
    )
  }

  return (
    <ThemeProvider theme={theme}>

      <Card style={{ ...companyCardBackgroundStyle }}>
        <CardMedia
          component="img"
          height="200"
          image={imageLink}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#ffd89b">
            {projectName}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {getProjectSummary()}
          </Typography>
        </CardContent>
        <CardActions>
          {link && (
            <Button onClick={redirectToProjectLink} size="small" sx={{ color: "#4E65FF" }}>
              Github
            </Button>
          )}
        </CardActions>


      </Card>
    </ThemeProvider >


  )
}

export default ProjectCard;