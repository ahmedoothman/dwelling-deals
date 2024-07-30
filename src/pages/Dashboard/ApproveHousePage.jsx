import React, { useState, useEffect } from 'react';
import { Box, Grid, Alert } from '@mui/material';
import { getPendingHouses } from '../../services/houseService';
import HouseCard from '../../components/admin/HouseCard';
import PageHeader from '../../components/dashboard/PageHeader';
import { approveHousesService } from '../../services/houseService';
function ApproveHousePage() {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const response = await getPendingHouses();
      setHouses(response.data);
    };
    fetchHouses();
  }, []);
  const approveHouse = async (id) => {
    const response = await approveHousesService(id);
    if (response.status === 'success') {
      setHouses(houses.filter((house) => house._id !== id));
    }
  };
  return (
    <Box
      sx={{
        margin: '40px',
      }}
    >
      <PageHeader
        title='Approve House'
        numberOfResults={houses.length}
        styles={{
          margin: '10px',
        }}
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
    </Box>
  );
}

export default ApproveHousePage;
