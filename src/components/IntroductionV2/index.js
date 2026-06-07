import { Container, Grid, Box, Button, Typography, IconButton } from '@mui/material';
import React from 'react';
import { personalDetails } from './utils/personalDetails';
import self from '../../assets/suitup.jpg';
import { GitHub, LinkedIn, ArticleOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function IntroductionV2({ initiateVini, setIniateVini }) {
  const { name, summary } = personalDetails;

  const open = (url) => window.open(url, '_blank', 'noreferrer');

  const links = {
    resume: 'https://rushil1999.github.io/portfolio/Resume.pdf',
    leetcode: 'https://leetcode.com/rushil1999/',
    github: 'https://github.com/rushil1999',
    linkedin: 'https://linkedin.com/in/rushil1999',
    blog: 'https://medium.com/@rushil1999.dev',
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 12 }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <Box
                component="img"
                src={self}
                alt={name}
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  display: 'block',
                  boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6)',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            >
              <Typography variant="h2" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
                {name}
              </Typography>
              <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 500, mb: 3 }}>
                Software Development Engineer
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.85, maxWidth: 520 }}
              >
                {summary}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                <Button variant="contained" size="large" onClick={() => open(links.resume)}>
                  Resume
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => open(links.leetcode)}
                  sx={{
                    borderColor: 'divider',
                    color: 'text.secondary',
                    '&:hover': { borderColor: 'primary.main', color: 'primary.main', bgcolor: 'transparent' },
                  }}
                >
                  DSA Journey
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => setIniateVini(!initiateVini)}
                  sx={{
                    borderColor: 'divider',
                    color: 'text.secondary',
                    '&:hover': { borderColor: 'primary.main', color: 'primary.main', bgcolor: 'transparent' },
                  }}
                >
                  Ask Vini
                </Button>
              </Box>

              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <IconButton
                  onClick={() => open(links.github)}
                  sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
                >
                  <GitHub sx={{ fontSize: 26 }} />
                </IconButton>
                <IconButton
                  onClick={() => open(links.linkedin)}
                  sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
                >
                  <LinkedIn sx={{ fontSize: 26 }} />
                </IconButton>
                <IconButton
                  onClick={() => open(links.blog)}
                  sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
                >
                  <ArticleOutlined sx={{ fontSize: 26 }} />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
