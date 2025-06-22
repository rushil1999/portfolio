import React from 'react';
import {  Card, CardMedia, CardContent, Typography, responsiveFontSizes } from '@mui/material';
import { keyframes, useTheme  } from '@emotion/react';

// Subtle glowing animation
const pulse = keyframes`
  0% { box-shadow: 0 0 10px rgba(0, 229, 255, 0.2); }
  50% { box-shadow: 0 0 20px rgba(0, 229, 255, 0.6); }
  100% { box-shadow: 0 0 10px rgba(0, 229, 255, 0.2); }
`;

// Individual Project Card
const ProjectCard = ({ imageLink, projectName, summary, tags }) => {
  let theme = useTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Card
      sx={{
        maxWidth: 400,
        background: 'linear-gradient(145deg, #1a1a1a, #222)',
        border: '1px solid #2e2e2e',
        borderRadius: '20px',
        boxShadow: '0 0 20px rgba(0, 229, 255, 0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-6px) scale(1.02)',
          boxShadow: '0 0 30px rgba(0, 229, 255, 0.5)',
          animation: `${pulse} 2s infinite`,
        }
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
        <Typography variant="body1" sx={{ color: theme.palette.primary.secondary, mb: 2 }}>
          {summary}
        </Typography>
        {/* <Stack direction="row" spacing={1} flexWrap="wrap">
          {tags.map((tag, index) => (
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
          ))}
        </Stack> */}
      </CardContent>
    </Card>
  );
};


export default ProjectCard;