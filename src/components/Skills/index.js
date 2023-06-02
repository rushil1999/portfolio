import React from 'react';
import SocialMediaSVGElement from '../socialMediaSVGElement';
import { Card, Container, Stack } from '@mui/material';
import { skillsCardBackgroundStyle } from '../../styles/skills';
import { experienceTitleStyle } from '../../styles/experience';
import SkillsSVGElement from '../skillsSVGElement';

const Skills = () => {
  return (
    <Card style={skillsCardBackgroundStyle}>
      <div style={experienceTitleStyle}>
        <h1 >
          Skills
        </h1>
      </div>
      <Stack direction={"row"}>
        <Container maxWidth="md">
          <div style={{ margin: 'auto', fontSize: 'xx-large', fontStyle: 'italic', padding: '15px', color: "#FFFFFF" }}>
            <ul>
              <li>
                <p>
                  Proficient in Full Stack development
                </p>
              </li>
              <li>
                <p>
                  Good Experience with Technolohies like Node, Typescript, React, API Development
                </p>
              </li>
              <li>
                <p>
                  Well-versed with CS Fundamentals
                </p>
              </li>
              <li>
                <p>
                  Good Practice with Data Structures and Algorithms
                </p>
              </li>
            </ul>
          </div>
        </Container>
        <Container maxWidth="sm" style={{ padding: '15px' }}>
          <SkillsSVGElement />
        </Container>
      </Stack>
    </Card>
  );

}

export default Skills;