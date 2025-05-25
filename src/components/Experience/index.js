import { Card, Container, Grid, Box,   Typography, createTheme, responsiveFontSizes, useMediaQuery } from '@mui/material';
import React from 'react'
import Company from '../Company';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent/TimelineOppositeContent';
import { motion } from 'framer-motion';
import { companyDetails } from './utils/companyInformation';
import { useTheme } from '@emotion/react';

export default function Experience() {
  let theme = useTheme();

  theme = responsiveFontSizes(theme)
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
      <Box
        p={8}
      >
        <Typography
          variant="h2"
          align='center'
          
        >
          Experiences
        </Typography>
        <Container>
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
                    <TimelineItem sx={{mt: 8}}>
                      <TimelineOppositeContent>
                        <Grid container>
                          <Grid item xs={12}>
                            <motion.div
                              initial={{ x: index % 2 === 0 ? "-100%" : '100%' }}
                              whileInView={{ x: "0%" }}
                              transition={{ duration: 1 }}
                            >
                              <Typography
                                variant={matches ? 'h5' : 'caption'}
                                sx={{ 
                                  paddingRight: '15px' ,
                                  fontWeight: 'bold',
                                  color: 'text.primary'
                                }}
                              >
                                {duration}
                              </Typography>
                            </motion.div>
                          </Grid>
                        </Grid>
                      </TimelineOppositeContent>

                      <TimelineSeparator>
                        <TimelineDot color="secondary"/>
                        <TimelineConnector/>
                      </TimelineSeparator>

                      <TimelineContent>
                        <Company companyDetails={company} />
                      </TimelineContent>
                    </TimelineItem>
                )
              })
            }
          </Timeline>
        </Container>
      </Box >
  );
}


// sx={{ float: `${companyCardAlignmet}` }}


{/* <Grid container>
                            <Grid item xs={12}>
                              <Typography
                                variant={'h5'}
                                sx={{ color: "#4dff4d", paddingRight: '15px' }}
                              >
                                {duration}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <TechStack companyName={companyName} companyCardAlignment={companyCardAlignmet} />
                            </Grid>
                          </Grid> */}