import { Button, Container, Grid, Typography, createTheme, responsiveFontSizes, useMediaQuery } from '@mui/material';
import { peronalDetails } from '../Introduction/utils/personalDetails';



const IntroductionV2 = () => {
  const { name, summary } = peronalDetails;

  return(
    <Container>
      <Typography
                  variant="h4"
                  sx={{color: "#555555"}}
                >
                  {summary}
                </Typography>
    </Container>
  )
}
export default IntroductionV2;