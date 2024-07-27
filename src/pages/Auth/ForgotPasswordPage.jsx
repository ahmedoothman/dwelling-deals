import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { forgotPasswordService } from '../../services/userService';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPending(true);
    const response = await forgotPasswordService(email);
    if (response.status === 'success') {
      navigate('/auth/reset-password'); // Navigate to login page
    } else {
      setError(response.message);
    }
    setPending(false);
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Forgot Password
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {message && (
                <Alert severity='success' sx={{ marginBottom: '10px' }}>
                  {message}
                </Alert>
              )}
              {error && (
                <Alert severity='error' sx={{ marginBottom: '10px' }}>
                  {error}
                </Alert>
              )}
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                {pending ? (
                  <CircularProgress color='inherit' size={25} />
                ) : (
                  'Send Reset Code'
                )}
              </Button>
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <Link href='/auth' variant='body2'>
                    Remember your password? Sign in
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
