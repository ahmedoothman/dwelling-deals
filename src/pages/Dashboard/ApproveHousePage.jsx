import React, { useState, useEffect } from 'react';
import { Box, Grid, Snackbar, Alert, Button } from '@mui/material';
import {
  getPendingHouses,
  approveHousesService,
} from '../../services/houseService';
import HouseCard from '../../components/admin/HouseCard';
import PageHeader from '../../components/dashboard/PageHeader';

function ApproveHousePage() {
  const [houses, setHouses] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // 'success' or 'error'

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await getPendingHouses();
      setHouses(response.data);
    };
    fetchHouses();
  }, []);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const approveHouse = async (id) => {
    try {
      const response = await approveHousesService(id);
      if (response.status === 'success') {
        setHouses(houses.filter((house) => house._id !== id));
        setSnackbarMessage('House approved successfully!');
        setSnackbarSeverity('success');
      } else {
        setSnackbarMessage('Failed to approve house.');
        setSnackbarSeverity('error');
      }
    } catch (error) {
      console.error('Error approving house:', error);
      setSnackbarMessage('An error occurred while approving the house.');
      setSnackbarSeverity('error');
    } finally {
      setSnackbarOpen(true);
    }
  };

  return (
    <Box sx={{ margin: '40px' }}>
      <PageHeader
        title='Approve House'
        numberOfResults={houses.length}
        styles={{ margin: '10px' }}
      />
      <Grid container spacing={2}>
        {houses?.map((house) => (
          <Grid item xs={12} sm={6} md={4} key={house._id}>
            <HouseCard data={house} approveHouse={approveHouse} />
          </Grid>
        ))}
      </Grid>
      {houses.length === 0 && (
        <Box
          sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        >
          <Alert severity='info'>No pending houses to approve</Alert>
        </Box>
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        action={
          <Button color='inherit' onClick={handleCloseSnackbar}>
            Close
          </Button>
        }
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

export default ApproveHousePage;
