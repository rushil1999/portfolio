import React from 'react';
import {  Card, CardMedia, Grid,  CardContent, Typography, responsiveFontSizes, Stack, Chip, Button } from '@mui/material';
import { keyframes, useTheme  } from '@emotion/react';

// Subtle glowing animation
const pulse = keyframes`
  0% { box-shadow: 0 0 10px rgba(0, 229, 255, 0.2); }
  50% { box-shadow: 0 0 20px rgba(0, 229, 255, 0.6); }
  100% { box-shadow: 0 0 10px rgba(0, 229, 255, 0.2); }
`;

// Individual Project Card
const ProjectCard = ({ imageLink, projectName, summary, tags, link }) => {
  let theme = useTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Card
      sx={{
        maxWidth: 400
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={imageLink}
        alt={projectName}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 1 }}>
          {projectName}
        </Typography>
        <Grid container  direction="row"  spacing={1}  p={1}>
          {tags != null && tags.length > 0 && tags.map((tag, index) => (
            <Grid item>
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{
                bgcolor: 'rgba(0, 212, 160, 0.15)',
                color: '#aefcef',
                border: '1px solid rgba(0, 212, 160, 0.4)',
                fontFamily: 'Orbitron',
                letterSpacing: '0.05em'
              }}
            />
            </Grid>
            
          ))}
        </Grid>
        <Typography variant="body1" sx={{ color: theme.palette.primary.secondary, mb: 2 }}>
          {summary}
        </Typography>
        {link != null && 
          (<Button
            variant="contained"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </Button>
          )
        }
        
      </CardContent>
    </Card>
  );
};


export default ProjectCard;