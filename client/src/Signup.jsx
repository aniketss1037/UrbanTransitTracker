import React, { useState } from 'react';
import { TextField, Button, Container, Typography, CssBaseline, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
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


const Form = styled('form')({
  width: '100%',
  marginTop: '16px',
});

const AlreadyHaveAccount = styled('div')({
  marginTop: '16px',
  textAlign: 'center',
});

const LoginButton = styled(Button)({
  marginTop: '8px',
});

function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
 
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
    // Add your signup logic here, e.g., API call, form validation, etc.
    axios.post('http://localhost:3001/register',formData)
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err => console.log(err))
  };

  return (
    <MainContainer>
      <CssBaseline />
      <Paper>
        <Typography component="h1" variant="h5">
            Register
        </Typography>
        <Form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
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
            Register
          </Button>
        </Form>
        <AlreadyHaveAccount>
          <Typography variant="body2">Already have an account?</Typography>
          <Link to="/login">
          <LoginButton variant="outlined" color="primary" fullWidth>
            Login
          </LoginButton>
          </Link>
        </AlreadyHaveAccount>
      </Paper>
    </MainContainer>
  );
}

export default SignUp;
