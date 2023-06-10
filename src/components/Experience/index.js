import { Card, Container, Grid, ThemeProvider, Typography, createTheme, responsiveFontSizes, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import Company from '../Company';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent/TimelineOppositeContent';
import { motion } from 'framer-motion';
import { companyCardHoverStyle, experienceCardBackgroundStyle } from '../../styles/experience';
import TechStack from '../TechStack';
import { companyDetails } from './utils/companyInformation';

export default function Experience() {
  let theme = createTheme({
  })

  theme = responsiveFontSizes(theme)
  const [accordianWidthState, setAccordianWidthState] = useState('70%');
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <ThemeProvider theme={theme}>
      <Card style={{ ...experienceCardBackgroundStyle }}>
        <Typography
          variant="h2"
          align='center'
          sx={{ fontStyle: 'italic', padding: '35px', color: "#FFFFFF" }}
        >
          Experiences
        </Typography>
        <Timeline position={matches ? 'alternate' : 'right'}>
          {
            companyDetails.map((company, index) => {
              const { duration, companyName } = company;
              let companyCardAlignmet = 'right';
              if (index % 2 === 0) {
                companyCardAlignmet = 'left'
              }
              if (matches === false) {
                companyCardAlignmet = 'left';
              }
              return (
                <ThemeProvider theme={theme}>
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant={matches ? 'h5' : 'caption'}
                            sx={{ color: "#4dff4d" }}
                          >
                            {duration}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <TechStack companyName={companyName} companyCardAlignment={companyCardAlignmet} />
                        </Grid>
                      </Grid>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Container sx={{ width: accordianWidthState, padding: '15px', float: `${companyCardAlignmet}` }}>
                        <motion.div
                          whileHover={companyCardHoverStyle}
                        >
                          <Company companyDetails={company} setAccordianWidthState={setAccordianWidthState} />
                        </motion.div>
                      </Container>
                    </TimelineContent>
                  </TimelineItem>
                </ThemeProvider>
              )
            })

          }
        </Timeline>
      </Card >
    </ThemeProvider >
  );
}



