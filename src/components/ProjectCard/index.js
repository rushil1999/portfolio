import { ThemeProvider } from '@emotion/react';
import { Box, Card, Grid, Paper, CardActions, CardContent, CardMedia, Container, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import React from 'react';
import { companyCardBackgroundStyle } from '../../styles/company';

const ProjectCard = (props) => {

  const { projectName, summary, link, imageLink } = props;
  let theme = createTheme({});
  theme = responsiveFontSizes(theme);


  const redirectToProjectLink = () => {
    window.open(link, "_blank", "noreferrer");
  }

  const getProjectSummary = () => {
    const roleDescriptionHTML = summary.map((description) => {
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

      // <Card style={{ ...companyCardBackgroundStyle }}>
      //   <CardMedia
      //     component="img"
      //     height="200"
      //     image={imageLink}
      //     alt="img"
      //   />
      //   <CardContent>
      //     <Typography gutterBottom variant="h4" component="div"
      //       sx={{
      //         fontstyle: "bold",
      //       fontFamily:"cursive",
      //       fontWeight: 'fontWeightLight',
      //       background: "linear-gradient(90deg, #283e51, #485563)",
      //       WebkitBackgroundClip: "text",
      //       WebkitTextFillColor: "transparent", 
      //     }}
      //     >
      //       {projectName}
      //     </Typography>
      //     <Typography color="text.primary" 
      //     >
      //       {getProjectSummary()}
      //     </Typography>
      //   </CardContent>
      //   <CardActions>
      //     {link && (
      //       <Button onClick={redirectToProjectLink} size="small" sx={{ color: "#4E65FF" }}>
      //         Github
      //       </Button>
      //     )}
      //   </CardActions>


      // </Card>

    //   <Container maxWidth="lg" sx={{ flexGrow: 1 }} alignItems="center">
    //     <Grid
    //       container
    //       spacing={8}
    //       alignItems="flex-start"
    //       justifyContent="center"
    //     >
    //       <Grid item xs={12} md={5}>
    //       <Box
    //   sx={{
    //     maxWidth: 360,
    //     margin: 'auto',
    //     mt: 4,
    //     borderRadius: '16px',
    //     boxShadow: '0 0 10px #00f2ff44',
    //     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    //     '&:hover': {
    //       transform: 'scale(1.03)',
    //       boxShadow: '0 0 20px #00f2ff99',
    //     },
    //   }}
    // >
    //   <Card
    //     sx={{
    //       backgroundColor: 'transparent',
    //       borderRadius: '16px',
    //       overflow: 'hidden',
    //       border: '1px solid #00f2ff33',
    //     }}
    //   >
    //     <CardMedia
    //       component="img"
    //       image={image}
    //       alt="Futuristic"
    //       sx={{
    //         width: '100%',
    //         height: 'auto',
    //         objectFit: 'cover',
    //         filter: 'brightness(0.9) contrast(1.1)',
    //       }}
    //     />
    //   </Card>
    // </Box>
    //       </Grid>
    //       <Grid item xs={12} md={7}>
    //         <Typography sx={{textAlign: 'center'}} variant="h5">
    //         {summary}
    //         </Typography>
    //         <motion.div
    //           initial={{ x: "100%" }}
    //           whileInView={{ x: "0%" }}
    //           transition={{ duration: 1 }}
    //         >
    //         </motion.div>
    //       </Grid>
          
    //     </Grid>
    //   </Container>

    <Box
      sx={{
        backgroundColor: 'background.default',
        // minHeight: '100vh',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: '1200px' }}
      >
        {/* Image */}
        <Grid item xs={12} md={6}>
        <Card
        sx={{
          backgroundColor: 'transparent',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid #00f2ff33',
        }}
      >
        <CardMedia
          component="img"
          image={imageLink}
          alt="Futuristic"
          sx={{
            width: '100%',
            height: '250px',
            objectFit: 'cover',
            filter: 'brightness(0.9) contrast(1.1)',
          }}
        />
      </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              background: 'linear-gradient(135deg, #1a1a1a 0%, #141c2b 100%)',
              color: '#e0e0e0',
              borderRadius: '20px',
              border: '1px solid #00f2ff33',
              boxShadow: '0 0 10px #00f2ff55',
              transition: 'box-shadow 0.3s ease',
              '&:hover': {
                boxShadow: '0 0 20px #00f2ff99',
              },
            }}
          >
            
            <Typography >
              {summary}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>

  )
}

export default ProjectCard;