import { ThemeProvider } from '@emotion/react';
import { Box, Card, Grid, Paper, CardActions, CardContent, CardMedia, Container, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import React from 'react';
import { companyCardBackgroundStyle } from '../../styles/company';

const ProjectCard = (props) => {

  const { projectName, summary, link, imageLink } = props;
  let theme = createTheme({});
  theme = responsiveFontSizes(theme);


  const redirectToProjectLink = () => {
    window.open(link, "_blank", "noreferrer");
  }


  return (
    <Grid
      container
      spacing={8}
      p={4}
      sx={{ maxWidth: '1200px' }}
    >
      <Grid item xs={12} md={5} margin="auto">
        <Card>
      <CardMedia
        component="img"
        image={imageLink}
        alt="Futuristic"
        sx={{
          width: '100%',
          height: '250px',
          objectFit: 'cover',
          filter: 'brightness(0.9) contrast(1.1)',
        }}
      />
        </Card>
      </Grid>
      <Grid item xs={12} md={7} margin="auto">
        <Card
          elevation={3}
          sx={{
            p: 4,
          }}
        >
          <Typography 
          variant='h6'>
            {summary}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ProjectCard;