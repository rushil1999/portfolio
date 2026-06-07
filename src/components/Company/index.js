import { Card, Box, Avatar, Typography, CardContent } from '@mui/material';
import React from 'react';
import influxdata from '../../assets/influxdata.png';
import procureNetworks from '../../assets/procure.png';
import shipmnts from '../../assets/Shipmnts.jpeg';
import taashaTech from '../../assets/taashaTech.jpeg';
import fetchReawards from '../../assets/fetch.png';
import tesla from '../../assets/tesla.png';

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

const Company = ({ companyDetails }) => {
  const { companyName, role, roleDescription } = companyDetails;

  return (
    <Card
      sx={{
        maxWidth: { xs: '100%', md: '460px' },
        mx: { xs: 0, md: 1 },
        transition: 'border-color 0.25s ease',
        '&:hover': { borderColor: 'rgba(45, 212, 191, 0.3)' },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: roleDescription?.length ? 2.5 : 0 }}>
          <Avatar
            src={getCompanyLogo(companyName)}
            alt={companyName}
            sx={{
              width: 48,
              height: 48,
              bgcolor: 'background.default',
              border: '1px solid',
              borderColor: 'divider',
            }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', lineHeight: 1.3 }}>
              {companyName}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {role}
            </Typography>
          </Box>
        </Box>

        {roleDescription && (
          <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
            {roleDescription.map((item, i) => (
              <Box
                component="li"
                key={i}
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.82rem',
                  lineHeight: 1.65,
                  mb: 0.75,
                  '&::marker': { color: 'primary.main' },
                }}
              >
                {item.replace(/^\d+\.\s*/, '')}
              </Box>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default Company;
