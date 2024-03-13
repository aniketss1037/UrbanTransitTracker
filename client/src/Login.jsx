import  { useState } from 'react';
import { TextField, Button, Typography, CssBaseline, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import backgroundImage from './components/pixlr-image-generator-988d93df-feaf-4339-841c-6c8b51b2c4b3.png'; // Import your image

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



const Form = styled('form')({
  width: '100%',
  marginTop: '16px',
});

const NoAccount = styled('div')({
  marginTop: '16px',
  textAlign: 'center',
});

const SignUpButton = styled(Button)({
  marginTop: '8px',
});

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., API call, form validation, etc.
    axios.post('http://localhost:3001/login', formData)
      .then(result => {
        console.log(result);
        // Redirect to a different page upon successful login
        if(result.data === "Success"){
            navigate('/home');
        }
        
      })
      .catch(err => console.log(err));
  };

  return (
    <MainContainer>
      <CssBaseline />
      <Paper>
        <Typography component="h1" variant="h5" color="black">
          Login
        </Typography>
        <Form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Form>
        <NoAccount>
          <Typography variant="body2" color="black">Don't have an account?</Typography>
          <Link to="/register">
            <SignUpButton variant="contained" color="secondary" fullWidth>
              Register
            </SignUpButton>
          </Link>
        </NoAccount>
      </Paper>
    </MainContainer>
  );
}

export default Login;
