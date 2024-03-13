import React from 'react';
import { Container, Typography, CssBaseline, styled, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from './components/pixlr-image-generator-d95e41be-8a3d-4546-a40b-68281a5dca59.png'; // Import your image

const MainContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundImage: `url(${backgroundImage})`, // Use imported image as background
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: '#CDB9F5', // Change the background color of the page
});

const Paper = styled('div')({
  marginTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  borderRadius: '4px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Change the background color of the login form with opacity
});

function Home() {
  return (
    <MainContainer>
      <CssBaseline />
      <Paper>
        <Typography component="h1" variant="h5">
         Welcome
        </Typography>
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">
          UrbanTransitTracker aims to transform how cities manage transportation networks By promoting the use of eco-friendly transport modes and efficient resource allocation, UrbanTransitTracker empowers cities to achieve climate goals while enhancing urban mobility and residents' quality of life. Embracing UrbanTransitTracker can lead to a greener, more sustainable future, where urban transport drives positive environmental change and fosters resilient, thriving communities.

          </Typography>

          <Typography align='center' style={{ marginTop: '40px' }}>
            Key features are as follows
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/A" style={{ marginTop: '40px' , marginRight: '135px' }}>
            Route Optimization
          </Button>
          <Button variant="contained" color="primary" component={Link} to="/B" style={{ marginTop: '40px' }}>
            Vehicle Protocols
          </Button>
          <Button variant="contained" color="primary" component={Link} to="/C" style={{ marginTop: '40px' , marginRight: '100px' }}>
            Schedule Coordination
          </Button>
          <Button variant="contained" color="primary" component={Link} to="/D" style={{ marginTop: '40px' }}>
            Real Time Tracking
          </Button>
        </Container>
      </Paper>
    </MainContainer>
  );
}

export default Home;
