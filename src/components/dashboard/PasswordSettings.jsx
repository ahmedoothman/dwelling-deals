import React, { useState } from 'react';
import {
  Button,
  TextField,
  Snackbar,
  CircularProgress,
  Typography,
  Alert,
  Box,
} from '@mui/material';
import { changePasswordService } from '../../services/userService'; // Import your password change service

function PasswordSettings() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSubmit = async () => {
    if (password !== passwordConfirm) {
      setSnackbarMessage('New password and confirmation do not match');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    setLoading(true);

    try {
      const response = await changePasswordService(
        currentPassword,
        password,
        passwordConfirm
      );
      if (response.status === 'success') {
        setSnackbarMessage('Password changed successfully!');
        setSnackbarSeverity('success');
      } else {
        setSnackbarMessage(response.message || 'An error occurred');
        setSnackbarSeverity('error');
      }
    } catch (error) {
      setSnackbarMessage('An error occurred. Please try again.');
      setSnackbarSeverity('error');
    } finally {
      setSnackbarOpen(true);
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        width: '50%',
        margin: '30px auto',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <Typography variant='h4' gutterBottom>
        Password Settings
      </Typography>
      <TextField
        label='Current Password'
        variant='outlined'
        type='password'
        fullWidth
        margin='normal'
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <TextField
        label='New Password'
        variant='outlined'
        type='password'
        fullWidth
        margin='normal'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label='Confirm New Password'
        variant='outlined'
        type='password'
        fullWidth
        margin='normal'
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <Button
        variant='contained'
        color='primary'
        onClick={handleSubmit}
        disabled={loading}
        style={{ position: 'relative', marginTop: '16px' }}
      >
        {loading && (
          <CircularProgress
            size={24}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
        Submit
      </Button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default PasswordSettings;
