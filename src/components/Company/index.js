import {
  Card, 
  Box, 
  Avatar, 
  Typography, 
  responsiveFontSizes, 
  CardContent, 
  useMediaQuery 
} from '@mui/material';
import React from 'react';
import influxdata from '../../assets/influxdata.png'
import procureNetworks from '../../assets/procure.png'
import shipmnts from '../../assets/Shipmnts.jpeg'
import taashaTech from '../../assets/taashaTech.jpeg'
import fetchReawards from '../../assets/fetch.png'
import tesla from '../../assets/tesla.png'
import { useTheme } from '@emotion/react';

const Company = ({ companyDetails }) => {
  let theme = useTheme();
  theme = responsiveFontSizes(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { companyName, role } = companyDetails;

  const getCompanyLogo = (companyName) => {
    switch (companyName) {
      case 'Tesla': return tesla;
      case 'Fetch Rewards': return fetchReawards;
      case 'Influxdata': return influxdata;
      case 'Procure Networks': return procureNetworks;
      case 'Shipmnts': return shipmnts;
      case 'Taasha Technologies': return taashaTech;
      default: return influxdata;
    }
  };

  return (
    <Card
      sx={{
        maxWidth: { xs: '100%', md: '450px' },
        mx: { xs: 0, md: 2 }, // Adds horizontal margin on desktop
        p: { xs: 1, md: 0 },   // Padding inside the card for small screens
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
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
  );
};

export default Company;


