import { Accordion, AccordionDetails, AccordionSummary, Container, Stack } from '@mui/material';
import React from 'react';
import influxdata from '../../assets/influxdata.png'
import procureNetworks from '../../assets/procure.png'
import shipmnts from '../../assets/Shipmnts.jpeg'
import taashaTech from '../../assets/taashaTech.jpeg'
import { accordianSummaryCardHeightStyle, accordianSummaryCardStyle, companyCardBackgroundStyle, companyLogoStyle, companyNameStyle } from '../../styles/company';
const Company = ({ companyDetails }) => {
  const { companyName, role, link, roleDescription } = companyDetails;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const getCompanyLogo = (companyName) => {
    let companyLogoLink;
    switch (companyName) {
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
        <li>
          {description}
        </li>
      )
    })
    return (
      <ol>
        {roleDescriptionHTML}
      </ol>
    )
  }
  return (


    <Accordion style={{ ...companyCardBackgroundStyle }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary>
        <div style={accordianSummaryCardStyle}>
          <img style={companyLogoStyle} src={getCompanyLogo(companyName)} alt={'company-logo'} />
          <div style={accordianSummaryCardHeightStyle}>
            <h2 style={companyNameStyle}>
              {companyName}
            </h2>
            <h3 style={companyNameStyle}>
              {role}
            </h3>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails style={{ textAlign: 'left' }}>
        <div>
          {getCompanyRoleDescription()}
        </div>
      </AccordionDetails>
    </Accordion >

  )
}

export default Company;

