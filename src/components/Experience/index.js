import { Divider, Box, Typography, responsiveFontSizes, useMediaQuery } from '@mui/material';
import React from 'react'
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

export default function Experience() {
  let theme = useTheme();
  theme = responsiveFontSizes(theme);

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return(

    <React.Fragment>
      {!isMobile ? (
        <Box p={8}>
          <Divider>
            <Typography variant="h2" align="center">
              Experiences
            </Typography>
          </Divider>

          <Timeline position={isMobile ? 'right' : 'alternate'}>
            {companyDetails.map((company, index) => {
              const { duration } = company;

              return (
                <TimelineItem key={index} sx={{ mt: 8 }}>
                  {!isMobile && (
                    <TimelineOppositeContent>
                      <Typography
                        variant="h6"
                        sx={{
                          paddingRight: '15px',
                          fontWeight: 'bold',
                          color: theme.palette.primary.secondary
                        }}
                      >
                        {duration}
                      </Typography>
                    </TimelineOppositeContent>
                  )}

                  <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: theme.palette.secondary.main }} />
                    <TimelineConnector  />
                  </TimelineSeparator>

                  <TimelineContent>
                      <Company companyDetails={company} />
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </Box>
      ): (
        <Box p={4}>
          <Divider>
            <Typography variant="h4" align="center">
              Experiences
            </Typography>
          </Divider>
          <Box mt={4}>
            {companyDetails.map((company, index) => (
              <Box key={index} mb={4}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main }}
                >
                  {company.duration}
                </Typography>
                <Company companyDetails={company} />
              </Box>
            ))}
          </Box>
        </Box>
      )}

    </React.Fragment>

  )
}

