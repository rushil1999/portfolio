import { Card } from '@mui/material';
import React from 'react'
import Company from '../Company';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent/TimelineOppositeContent';
import { delay, motion } from 'framer-motion';
import { companyCardExternalStyle, companyCardHoverStyle, experienceCardBackgroundStyle, experienceDateStyle, experienceTitleStyle } from '../../styles/experience';
import TechStack from '../TechStack';
import { companyDetails } from './utils/companyInformation';

export default function Experience() {
  return (

    <Card style={{ ...experienceCardBackgroundStyle }}>
      <div style={{ ...experienceTitleStyle }}>
        <h1 >
          Experiences
        </h1>
      </div>
      <Timeline position="alternate">
        {
          companyDetails.map((company, index) => {
            const { duration, companyName } = company;
            let companyCardAlignmet = 'right';
            if (index % 2 === 0) {
              companyCardAlignmet = 'left'
            }
            return (
              <TimelineItem>
                <TimelineOppositeContent>
                  <div style={{ ...experienceDateStyle }}>
                    {duration}
                  </div>
                  <div>
                    <TechStack companyName={companyName} companyCardAlignment={companyCardAlignmet} />
                  </div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div style={{ ...companyCardExternalStyle, float: `${companyCardAlignmet}` }}>
                    <motion.div
                      whileHover={companyCardHoverStyle}
                    >
                      <Company companyDetails={company} />
                    </motion.div>
                  </div>
                </TimelineContent>
              </TimelineItem>
            )
          })

        }
      </Timeline>
      {/* <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <div style={{ ...experienceDateStyle }}>
              Sept 2022 - Present
            </div>
            <div >
              <TechStack />
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div style={{ ...companyCardExternalStyle, float: 'left' }}>
              <motion.div
                whileHover={companyCardHoverStyle}
              >
                <Company />
              </motion.div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent >
            <div style={{ ...experienceDateStyle }}>
              Sept 2022 - Present
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div style={{ ...companyCardExternalStyle, float: 'right' }}>
              <motion.div
                whileHover={companyCardHoverStyle}
              >
                <Company />
              </motion.div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <div style={{ ...experienceDateStyle }}>
              Sept 2022 - Present
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div style={{ ...companyCardExternalStyle, float: 'left' }}>
              <motion.div
                whileHover={companyCardHoverStyle}
              >
                <Company />
              </motion.div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <div style={{ ...experienceDateStyle }}>
              Sept 2022 - Present
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <div style={{ ...companyCardExternalStyle, float: 'right' }}>
              <motion.div
                whileHover={companyCardHoverStyle}
              >
                <Company />
              </motion.div>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline> */}
    </Card >
  );
}



