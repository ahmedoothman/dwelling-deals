import React, { useEffect } from 'react';
import PageHeader from '../../components/dashboard/PageHeader';
import { Box, Grid, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import HouseCard from '../../components/dashboard/HouseCard';
function Wishlist() {
  const { wishlist } = useSelector((state) => state.houses);

  useEffect(() => {}, []);

  return (
    <Box
      sx={{
        margin: '40px',
      }}
    >
      <PageHeader
        title={'Wishlist'}
        numberOfResults={wishlist?.length}
        styles={{
          margin: '10px',
        }}
      />
      {/* houses grid */}
      {wishlist?.length > 0 && (
        <Grid container spacing={2}>
          {wishlist.map((house) => (
            <Grid item xs={12} sm={6} md={4} key={house._id}>
              <HouseCard data={house} />
            </Grid>
          ))}
        </Grid>
      )}
      {wishlist?.length === 0 && (
        <Box
          sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        >
          <Alert severity='info'>Your wishlist is empty</Alert>
        </Box>
      )}
    </Box>
  );
}

export default Wishlist;
