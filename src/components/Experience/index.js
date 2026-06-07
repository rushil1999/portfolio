import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import Company from '../Company';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent/TimelineOppositeContent';
import { companyDetails } from './utils/companyInformation';
import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title }) => (
  <Box sx={{ mb: 8, textAlign: 'center' }}>
    <Typography variant="h2">{title}</Typography>
    <Box
      sx={{ width: 48, height: 3, bgcolor: 'primary.main', mx: 'auto', mt: 1.5, borderRadius: 2 }}
    />
  </Box>
);

export default function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box px={{ xs: 3, md: 8 }} py={{ xs: 6, md: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader title="Experience" />
      </motion.div>

      {!isMobile ? (
        <Timeline position="alternate">
          {companyDetails.map((company, index) => (
            <TimelineItem key={index} sx={{ mt: 4 }}>
              <TimelineOppositeContent>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: 'text.secondary', pt: 1.5 }}
                >
                  {company.duration}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: 'primary.main',
                    boxShadow: '0 0 12px rgba(45, 212, 191, 0.45)',
                  }}
                />
                <TimelineConnector sx={{ bgcolor: 'divider' }} />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Company companyDetails={company} />
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      ) : (
        <Box>
          {companyDetails.map((company, index) => (
            <Box key={index} mb={4}>
              <Typography
                variant="caption"
                sx={{ fontWeight: 600, color: 'primary.main', display: 'block', mb: 1 }}
              >
                {company.duration}
              </Typography>
              <Company companyDetails={company} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
