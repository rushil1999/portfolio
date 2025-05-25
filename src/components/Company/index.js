import {Card, Box, Avatar, Container, Typography, createTheme, responsiveFontSizes, CardContent, Grid } from '@mui/material';
import React from 'react';
import influxdata from '../../assets/influxdata.png'
import procureNetworks from '../../assets/procure.png'
import shipmnts from '../../assets/Shipmnts.jpeg'
import taashaTech from '../../assets/taashaTech.jpeg'
import fetchReawards from '../../assets/fetch.png'
import tesla from '../../assets/tesla.png'
import { useTheme } from '@emotion/react';

import { companyCardBackgroundStyle, companyLogoStyle } from '../../styles/company';
const Company = ({ companyDetails }) => {

  let theme = useTheme();
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
      <Card>
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          src={getCompanyLogo(companyName)}
          alt={companyName}
          sx={{ width: 56, height: 56, backgroundColor: '#222' }}
        />
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#e0f2f1' }}>
            {companyName}
          </Typography>
          <Typography variant="h6" sx={{ color: '#b0bec5' }}>
            {role}
          </Typography>
        </Box>
      </CardContent>
    </Card>
    

  )
}

export default Company;


