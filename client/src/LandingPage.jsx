import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Sidebar from './components/Sidebar';
import Appbar from './components/Appbar';
import Footer from './components/Footer';
import ToggleSwitch from './components/ToggleSwitch'; // Import ToggleSwitch component

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
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Appbar onMenuIconClick={toggleSidebar} />
        <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
        <Container component="main" maxWidth="md" style={{ paddingTop: '64px', paddingBottom: '60px', minHeight: 'calc(100vh - 124px)' }}>
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to Your Landing Page
            </Typography>
            <Typography variant="body1" gutterBottom>
              This is a modern and elegant landing page.
            </Typography>
            <ToggleSwitch label="Dark Mode" darkMode={darkMode} onThemeToggle={handleThemeToggle} />
            <Grid container spacing={2}>
              <Grid item>
                <Button variant="contained" color="primary" href="/login">
                  Login
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" href="/register">
                  Register
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Footer style={{ position: 'absolute', bottom: '0', width: '100%' }} />
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
