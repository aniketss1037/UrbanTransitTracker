import { Container, Typography, CssBaseline, styled } from '@mui/material';
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

function ScheduleCordinate() {
    return (
      <MainContainer>
        <CssBaseline />
        <Paper>
          <Typography component="h1" variant="h5">
          Schedule Cordinate
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
  
  export default ScheduleCordinate;
  