import React from 'react';
import SocialMediaSVGElement from '../socialMediaSVGElement';
import { Card, Container, Stack } from '@mui/material';
import { skillsCardBackgroundStyle, skillsSectionStyle } from '../../styles/skills';
import { experienceTitleStyle } from '../../styles/experience';
import SkillsSVGElement from '../skillsSVGElement';
import { skillsInformation } from './utils/skillsInformation';

const Skills = () => {

  const getSkillsHTML = (skills) => {

    const skillPointersHTML = skills.map((skill) => {
      return (
        <li>
          <p>
            {skill}
          </p>
        </li>
      )
    })
    return (
      <ul>
        {skillPointersHTML}
      </ul>
    )
  }

  return (
    <Card style={skillsCardBackgroundStyle}>
      <div style={experienceTitleStyle}>
        <h1 >
          Skills
        </h1>
      </div>
      <Stack direction={"row"}>
        <Container maxWidth="md">
          <div style={skillsSectionStyle}>
            {getSkillsHTML(skillsInformation)}
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