import { Card, Container, Grid, ThemeProvider, Typography, createTheme, responsiveFontSizes, useMediaQuery } from '@mui/material';
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
import { companyCardHoverStyle, experienceCardBackgroundStyle } from '../../styles/experience';
import TechStack from '../TechStack';
import { companyDetails } from './utils/companyInformation';

export default function Experience() {
  let theme = createTheme({
  })

  theme = responsiveFontSizes(theme)
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
                  <ThemeProvider theme={theme}>
                    <TimelineItem>

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
                                sx={{ color: "#ffd89b", paddingRight: '15px' }}
                              >
                                {duration}
                              </Typography>
                            </motion.div>
                          </Grid>
                          {matches && (
                            <motion.div
                              initial={{ x: index % 2 === 0 ? "-100%" : '100%' }}
                              whileInView={{ x: "0%" }}
                              transition={{ duration: 1 }}
                            >
                              <Grid item xs={12}>
                                <TechStack companyName={companyName} companyCardAlignment={companyCardAlignmet} />
                              </Grid>
                            </motion.div>

                          )}
                        </Grid>
                      </TimelineOppositeContent>

                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>

                      <TimelineContent sx={{ width: '80%' }}>
                        <motion.div
                          whileHover={companyCardHoverStyle}
                          initial={{ x: index % 2 === 0 ? "100%" : '-100%' }}
                          whileInView={{ x: "0%" }}
                          transition={{ duration: 1 }}
                        >
                          <Company companyDetails={company} />
                        </motion.div>
                      </TimelineContent>
                    </TimelineItem>
                  </ThemeProvider>
                )
              })
            }
          </Timeline>
        </Container>
      </Card >
    </ThemeProvider >
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