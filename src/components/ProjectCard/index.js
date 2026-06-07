import React from 'react';
import { Card, CardMedia, Grid, CardContent, Typography, Chip, Button } from '@mui/material';

const ProjectCard = ({ imageLink, projectName, summary, tags, link }) => {
  return (
    <Card
      sx={{
        width: 360,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
          borderColor: 'rgba(45, 212, 191, 0.3)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={imageLink}
        alt={projectName}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1.5, p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
          {projectName}
        </Typography>

        {tags?.length > 0 && (
          <Grid container spacing={0.75}>
            {tags.map((tag, i) => (
              <Grid item key={i}>
                <Chip
                  label={tag}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(45, 212, 191, 0.08)',
                    color: 'primary.light',
                    border: '1px solid rgba(45, 212, 191, 0.2)',
                    fontSize: '0.72rem',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        )}

        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, flexGrow: 1 }}>
          {Array.isArray(summary) ? summary.join(' ') : summary}
        </Typography>

        {link && (
          <Button
            variant="outlined"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              alignSelf: 'flex-start',
              borderColor: 'divider',
              color: 'text.secondary',
              '&:hover': { borderColor: 'primary.main', color: 'primary.main', bgcolor: 'transparent' },
            }}
          >
            View Project
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
