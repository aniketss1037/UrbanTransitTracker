import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Sidebar from './components/Sidebar';
import Appbar from './components/Appbar';
import Footer from './components/Footer';
import ToggleSwitch from './components/ToggleSwitch'; // Import ToggleSwitch component
import backgroundImage from './components/pixlr-image-generator-fa92d626-21ea-4b53-a635-ee9a20fc7eef.png'; // Import the image file

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: darkMode ? '#f48fb1' : '#d81b60',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#333333',
        secondary: darkMode ? '#f0f0f0' : '#666666',
      },
    },
  });

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          backgroundImage: `url(${backgroundImage})`, // Use backgroundImage variable
          backgroundSize: 'cover',
           // Adjust the opacity value as needed
        }}
      >
        <Appbar onMenuIconClick={toggleSidebar} />
        <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
        <Container
          component="main"
          maxWidth="md"
          style={{
            paddingTop: '64px',
            paddingBottom: '60px',
            minHeight: 'calc(100vh - 124px)',
            backgroundColor: 'rgba(255, 255, 255, 0.3)', // Adjust the color and opacity as needed
          }}
        >
          <Box my={4}>
            <Typography variant="h5" component="h1" gutterBottom>
              Welcome to future of transport
            </Typography>
            <Typography variant="body1" gutterBottom>
            UrbanTransitTracker utilizes advanced technology to optimize urban transport systems, prioritize sustainability, and reduce carbon emissions. Through features like advanced route optimization algorithms, eco-friendly vehicle management protocols, streamlined schedule coordination, and real-time tracking.

            </Typography>
            <ToggleSwitch label="Dark Mode" darkMode={darkMode} onThemeToggle={handleThemeToggle} />
            <Grid container spacing={2}>
              {/* Your main content goes here */}
            </Grid>
          </Box>
        </Container>
        <Footer style={{ position: 'absolute', bottom: '0', width: '100%' }} />
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
