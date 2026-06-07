import { Grid, Box, Typography } from '@mui/material';
import React from 'react';
import { projectDetails } from './utils/projectDetails';
import ProjectCard from '../ProjectCard';
import skyline from '../../assets/skyline.jpeg';
import user from '../../assets/user.jpeg';
import mobile from '../../assets/mobile.jpeg';
import ai_stream from '../../assets/ai-stream.jpeg';
import vini from '../../assets/vini.jpeg';
import { motion } from 'framer-motion';

const imageMap = {
  'Buffalo After Sunset': skyline,
  'User Authentication Module': user,
  'Picture-To-Product': mobile,
  'Glide': ai_stream,
  'Vini': vini,
};

const SectionHeader = ({ title }) => (
  <Box sx={{ mb: 8, textAlign: 'center' }}>
    <Typography variant="h2">{title}</Typography>
    <Box
      sx={{ width: 48, height: 3, bgcolor: 'primary.main', mx: 'auto', mt: 1.5, borderRadius: 2 }}
    />
  </Box>
);

const Project = () => {
  return (
    <Box px={{ xs: 3, md: 8 }} py={{ xs: 6, md: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader title="Projects" />
      </motion.div>

      <Grid container justifyContent="center" spacing={4}>
        {projectDetails.map((project, index) => {
          const { projectName, link, summary, tags } = project;
          return (
            <Grid item key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <ProjectCard
                  projectName={projectName}
                  link={link}
                  summary={summary}
                  tags={tags}
                  imageLink={imageMap[projectName] || user}
                />
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Project;
