import {Card, Box, Avatar, Container, Typography, createTheme, responsiveFontSizes, CardContent, Grid } from '@mui/material';
import React from 'react';
import influxdata from '../../assets/influxdata.png'
import procureNetworks from '../../assets/procure.png'
import shipmnts from '../../assets/Shipmnts.jpeg'
import taashaTech from '../../assets/taashaTech.jpeg'
import fetchReawards from '../../assets/fetch.png'
import tesla from '../../assets/tesla.png'
import { companyCardBackgroundStyle, companyLogoStyle } from '../../styles/company';
const Company = ({ companyDetails }) => {

  let theme = createTheme({});
  theme = responsiveFontSizes(theme);
  const { companyName, role, link, roleDescription } = companyDetails;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => (event, isExpanded) => {
    setExpanded(!expanded);

  };
  const getCompanyLogo = (companyName) => {
    let companyLogoLink;
    switch (companyName) {
      case 'Tesla': {
        companyLogoLink = tesla;
        break;
      }
      case 'Fetch Rewards': {
        companyLogoLink = fetchReawards;
        break;
      }
      case 'Influxdata': {
        companyLogoLink = influxdata;
        break;
      }
      case 'Procure Networks': {
        companyLogoLink = procureNetworks;
        break;
      }
      case 'Shipmnts': {
        companyLogoLink = shipmnts;
        break;
      }
      case 'Taasha Technologies': {
        companyLogoLink = taashaTech;
        break;
      }
      default: {
        companyLogoLink = influxdata;
        break;
      }

    }
    return companyLogoLink;
  }



  const getCompanyRoleDescription = () => {
    const roleDescriptionHTML = roleDescription.map((description) => {
      return (
        <Typography
          variant="subtitle1"
        >
          {description}
        </Typography>
      )
    })
    return (
      <Container sx={{ textAlign: 'left' }}>
        {roleDescriptionHTML}
      </Container>
    )
  }
  return (

      // <Accordion style={{ ...companyCardBackgroundStyle }} expanded={expanded} onChange={handleChange()}>
      //   <AccordionSummary>
      //     <Container sx={{ height: '80%', textAlign: 'center' }}>
      //       <img style={companyLogoStyle} src={getCompanyLogo(companyName)} alt={'company-logo'} />
      //       <Typography
      //         variant="h4"
      //         sx={{ marginTop: '0px', marginBottom: '0px',
      //         background: "linear-gradient(90deg, #283e51, #485563)",
      //         fontFamily: "bold",
      //         WebkitBackgroundClip: "text",
      //         WebkitTextFillColor: "transparent", 
      //         fontWeight: 'fontWeightLight' 
      //       }}
      //       >
      //         {companyName}
      //       </Typography>
      //       <Typography
      //         variant="h6"
      //         sx={{ marginTop: '0px', marginBottom: '0px', fontFamily: "bold" }}
      //       >
      //         {role}
      //       </Typography>
      //     </Container>
      //   </AccordionSummary>
      //   <AccordionDetails >
      //     {getCompanyRoleDescription()}
      //   </AccordionDetails>
      // </Accordion >
      <Card
      sx={{
        background: 'linear-gradient(145deg, #1a1a1a, #111)',
        color: '#e0e0e0',
        border: '1px solid #333',
        boxShadow: '0 0 10px #00f2ff33, 0 0 20px #00f2ff11',
        borderRadius: '16px',
        maxWidth: 400,
        margin: 'auto',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 0 12px #00f2ff55, 0 0 24px #00f2ff22',
        },
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          src={getCompanyLogo(companyName)}
          alt={companyName}
          sx={{ width: 56, height: 56, backgroundColor: '#222' }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00f2ff' }}>
            {companyName}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#b0bec5' }}>
            {role}
          </Typography>
        </Box>
      </CardContent>
    </Card>
    

  )
}

export default Company;


