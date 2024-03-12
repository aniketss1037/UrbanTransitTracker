// src/components/Footer.jsx
import { Typography, Container } from '@mui/material';

const footerStyle = {
  padding: '16px', // Adjust the padding as needed
  marginTop: 'auto',
  backgroundColor: '#f5f5f5', // Adjust the background color as needed
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          Your footer content goes here.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;

