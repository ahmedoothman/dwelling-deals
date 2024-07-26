import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from '@mui/material';
import OTP from '../../components/Auth/OTP';
import { verifyEmailService } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Copyright from '../../components/Auth/Copyright';
export default function VerifyEmailPage() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [verifyPending, setVerifyPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmitVerify = async (event) => {
    event.preventDefault();
    setVerifyPending(true);
    const response = await verifyEmailService(otp);
    if (response.status === 'success') {
      navigate('/auth'); // Navigate to login page
    } else {
      setError(response.message);
    }
    setVerifyPending(false);
  };

  return (
    <Container component='main' maxWidth={false} disableGutters>
      <CssBaseline />
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
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '20px',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '600px',
            margin: '40px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component='h1' variant='h5'>
              Verify Email
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmitVerify}
              sx={{
                mt: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Alert severity='info' sx={{ marginBottom: '10px' }}>
                Please enter the OTP sent to your email
              </Alert>
              <OTP
                separator={<span></span>}
                value={otp}
                onChange={setOtp}
                length={6}
              />
              {error && (
                <Alert severity='error' sx={{ marginBottom: '10px' }}>
                  {error}
                </Alert>
              )}
              <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
                {verifyPending ? (
                  <CircularProgress color='inherit' size={25} />
                ) : (
                  'Verify Email'
                )}
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Container>
  );
}
