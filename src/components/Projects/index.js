import { Container, Grid, Card, Box, Typography, Paper } from '@mui/material';
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
      <Typography
        variant="h2"
        align='center'
        sx={{
        padding: '35px',
        p: 8
     }}>
        Projects
      </Typography>
      <Grid container 
        direction="column" 
        alignItems="center"
        justifyContent="center" 
        spacing={2} 
      >
        {projectDetails.map((project, index) => {
          const { projectName, link, summary } = project;
          return (
            <Grid item>
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

{/* <Grid item>
          <motion.div
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
          >
            <Button color='inherit' onClick={redirectToLinkedin}>
              <LinkedIn sx={{ fontSize: { xs: 40, sm: 40, md: 50, lg: 60 }, color: '#FFFFFF' }} />
            </Button>
          </motion.div>
        </Grid> */}



{/* <React.Fragment>
            <Grid item>
              <motion.div
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  projectName={projectName}
                  link={link}
                  summary={summary}
                />
              </motion.div>
            </Grid>
          </React.Fragment> */}

