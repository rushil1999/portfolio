import { Divider, Grid, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react'
import { projectDetails } from './utils/projectDetails';
import ProjectCard from '../ProjectCard';
import { projectCardBackgroundStyle } from '../../styles/projects'
import skyline from '../../assets/skyline.jpeg';
import user from '../../assets/user.jpeg';
import mobile from '../../assets/mobile.jpeg';


const Project = () => {

  const getProjectImageLinkBasedOnName = (projectName) => {
    let imageLink;
    switch (projectName) {
      case 'Buffalo After Sunset': {
        imageLink = skyline
        break;
      };
      case 'User Authentication Module': {
        imageLink = user
        break;
      };
      case 'Picture-To-Product': {
        imageLink = mobile
        break;
      }
      default: {
        imageLink = user;
      }
    }
    return imageLink;
  }

  return (

    <Box>
      <Divider>
        <Typography
          variant="h2"
          align='center'
          sx={{
          padding: '35px',
          p: 8
      }}>
          Projects
        </Typography>
      </Divider>
      <Grid container 
        justifyContent="center" 
        spacing={4} 
      >
        {projectDetails.map((project, index) => {
          const { projectName, link, summary } = project;
          return (
            <Grid item key={index}>
              <ProjectCard
                projectName={projectName}
                link={link}
                summary={summary}
                imageLink={getProjectImageLinkBasedOnName(projectName)}
              />
            </Grid>
          );
        })}
      </Grid >
    </Box >
  );
}


export default Project;


