import { Card, Container, Grid,  Typography, createTheme, responsiveFontSizes, useMediaQuery } from '@mui/material';
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

export default function Experience() {
  let theme = createTheme({
  })

  theme = responsiveFontSizes(theme)
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
      <Card 
        sx={{
          backgroundColor: 'background.default',
          color: 'text.primary'
        }}
      >
        <Typography
          variant="h2"
          align='center'
          sx={{ 
            fontFamily: 'cursive', 
            fontStyle: 'bold', 
            padding: '35px',
            WebkitBackgroundClip: "text",
            fontWeight: 'fontWeightLight',
            color: 'text.primary'
          }}
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
                            {/* <Typography
                                variant={matches ? 'h5' : 'caption'}
                                sx={{ 
                                  paddingRight: '15px' ,
                                  fontWeight: 'bold',
                                  color: 'text.primary'
                                }}
                              >
                                {duration}
                              </Typography> */}
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
      </Card >
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