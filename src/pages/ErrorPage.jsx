import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { DANGER_COLOR } from '../constants/styles/colors';
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
            maxWidth: '600px',
            margin: '40px',
            color: DANGER_COLOR,
          }}
        >
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: '60px', mb: 2 }} />
          <Typography component='h1' variant='h3' gutterBottom>
            404
          </Typography>
          <Typography component='p' variant='h6' gutterBottom>
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
