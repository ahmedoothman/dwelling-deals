import React from 'react';
import { Box, Typography, Button, Container, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Icon404 from '../assets/icons/404.png';
import { DANGER_COLOR, PRIMARY_COLOR_DARK } from '../constants/styles/colors';
const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/dashboard');
  };

  return (
    <Container component='main' maxWidth={false} disableGutters>
      <Box
        sx={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1649770638916-f55225f9ffd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'calc(10px + 2vmin)',
          minHeight: '100vh',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '20px',
            borderRadius: '10px',
            width: '100%',
            minHeight: '300px',
            maxWidth: '600px',
            margin: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CardMedia
            sx={{ height: 60, width: 60, marginBottom: 2 }}
            image={Icon404}
            title='404'
          />
          <Typography component='p' variant='h6' gutterBottom color='primary'>
            We can't seem to find the page you're looking for.
          </Typography>
          <Button
            variant='contained'
            color='secondary'
            onClick={handleGoBack}
            sx={{ mt: 3 }}
          >
            Go Back Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ErrorPage;
