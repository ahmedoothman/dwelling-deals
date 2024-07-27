import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import { FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Alert } from '@mui/material';
import { signUpService } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import Copyright from '../../components/Auth/Copyright';

export default function RegisterPage() {
  const [userType, setUserType] = useState('user');
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registerPending, setregisterPending] = useState(false);
  const navigate = useNavigate();

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataObj = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      passwordConfirm: data.get('passwordConfirm'),
      phoneNumber: data.get('phoneNumber'),
      role: userType,
    };
    setregisterPending(true);
    const response = await signUpService(dataObj);
    if (response.status === 'success') {
      navigate('/auth/verify-email'); // Navigate to the verification page
    } else {
      setError(response.message);
      setErrorMessage(response.message);
    }
    setregisterPending(false);
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
          minHeight: '100%',
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
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign up
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete='given-name'
                    name='name'
                    required
                    fullWidth
                    id='name'
                    label='Name'
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='new-password'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name='passwordConfirm'
                    label='Password Confirm'
                    type='password'
                    id='passwordConfirm'
                    autoComplete='new-password'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name='phoneNumber'
                    label='Phone Number'
                    id='phoneNumber'
                    autoComplete='phone'
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl sx={{ width: '100%' }}>
                    <FormLabel id='demo-controlled-radio-buttons-group'>
                      Account type
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby='demo-controlled-radio-buttons-group'
                      name='controlled-radio-buttons-group'
                      value={userType}
                      onChange={handleUserTypeChange}
                      sx={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}
                    >
                      <FormControlLabel
                        value='user'
                        control={<Radio />}
                        label='User'
                      />
                      <FormControlLabel
                        value='realtor'
                        control={<Radio />}
                        label='Realtor'
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              {error && (
                <Alert severity='error' sx={{ marginBottom: '10px' }}>
                  {errorMessage}
                </Alert>
              )}
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                {registerPending ? (
                  <CircularProgress color='inherit' size={25} />
                ) : (
                  'Sign Up'
                )}
              </Button>
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <Link href='/auth' variant='body2'>
                    Already have an account? Sign in
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
