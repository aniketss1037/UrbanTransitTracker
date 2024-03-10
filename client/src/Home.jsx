import React from 'react';
import { Container, Typography, CssBaseline, styled } from '@mui/material';

const MainContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0', // Change the background color of the page
});

const Paper = styled('div')({
  marginTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  borderRadius: '4px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff', // Change the background color of the home component
});

function Home() {
  return (
    <MainContainer>
      <CssBaseline />
      <Paper>
        <Typography component="h1" variant="h5">
          Welcome to the Home Page
        </Typography>
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">
            Your content goes here. Customize this component as needed for your home page.
          </Typography>
        </Container>
      </Paper>
    </MainContainer>
  );
}

export default Home;
