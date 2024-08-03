import React from 'react';
import { Box, Typography, Button, Container, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Icon404 from '/assets/icons/404.png';
import AuthWrap from '../components/Auth/AuthWrap';
import { DANGER_COLOR, PRIMARY_COLOR_DARK } from '../constants/styles/colors';
const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/dashboard');
  };

  return (
    <Container component='main' maxWidth={false} disableGutters>
      <AuthWrap>
        <Box
          sx={{
            padding: '20px',
            borderRadius: '10px',
            width: '100%',
            minHeight: '300px',
            maxWidth: '600px',
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
      </AuthWrap>
    </Container>
  );
};

export default ErrorPage;
