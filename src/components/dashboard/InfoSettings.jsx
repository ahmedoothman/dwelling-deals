import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  TextField,
  Snackbar,
  CircularProgress,
  Typography,
  Alert,
  Box,
} from '@mui/material';

import { authActions } from '../../store/auth-slice'; // Import action to update user in Redux
import { updateMeService } from '../../services/userService';

function InfoSettings() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setPhoneNumber(user.phoneNumber || '');
    }
  }, [user]);

  const handleSubmit = async () => {
    setLoading(true);

    const response = await updateMeService(name, email, phoneNumber);
    if (response.status === 'success') {
      // Update Redux state with new user data
      dispatch(authActions.setUser(response.data));
      setSnackbarMessage('Information updated successfully!');
      setSnackbarSeverity('success');
    } else {
      setSnackbarMessage(response.message);
      setSnackbarSeverity('error');
    }
    setSnackbarOpen(true);
    setLoading(false);
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
        Info Settings
      </Typography>
      <TextField
        label='Name'
        variant='outlined'
        fullWidth
        margin='normal'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label='Email'
        variant='outlined'
        fullWidth
        margin='normal'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label='Phone Number'
        variant='outlined'
        fullWidth
        margin='normal'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
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
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          variant='filled'
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default InfoSettings;
