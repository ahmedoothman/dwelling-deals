import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from '@mui/material';
import OTP from '../../components/Auth/OTP';
import { resetPasswordService } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Copyright from '../../components/Auth/Copyright';
import AuthWrap from '../../components/Auth/AuthWrap';

export default function ResetPasswordPage() {
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [resetPending, setResetPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmitReset = async (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      setError('Passwords do not match');
      return;
    }
    setResetPending(true);
    const response = await resetPasswordService(otp, password, passwordConfirm);
    if (response.status === 'success') {
      navigate('/auth'); // Navigate to login page
    } else {
      setError(response.message);
    }
    setResetPending(false);
  };

  return (
    <Container component='main' maxWidth={false} disableGutters>
      <CssBaseline />
      <AuthWrap>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Reset Password
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmitReset}
            sx={{
              mt: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Alert severity='info' sx={{ marginBottom: '10px' }}>
              Please enter the OTP sent to your email and your new password
            </Alert>
            <OTP
              separator={<span></span>}
              value={otp}
              onChange={setOtp}
              length={6}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='new-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: '10px' }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='passwordConfirm'
              label='Confirm Password'
              type='password'
              id='passwordConfirm'
              autoComplete='new-password'
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              sx={{ marginBottom: '10px' }}
            />
            {error && (
              <Alert severity='error' sx={{ marginBottom: '10px' }}>
                {error}
              </Alert>
            )}
            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
              {resetPending ? (
                <CircularProgress color='inherit' size={25} />
              ) : (
                'Reset Password'
              )}
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </AuthWrap>
    </Container>
  );
}
