import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import SideFilter from '../../components/dashboard/SideFilter';
import useFilteredHouses from '../../hooks/useFilteredHouses';
import HouseCard from '../../components/dashboard/HouseCard';
function SalePage() {
  const { filteredHouses, filtersState } = useFilteredHouses('sale');

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <SideFilter purpose={'sale'} filtersOptions={filtersState} />
      </Grid>
      <Grid item xs={12} md={9}>
        <Box sx={{ padding: 2 }}>
          <Typography variant='h4'>SalePage</Typography>
          <Typography variant='h6'>
            Results : {filteredHouses.length}
          </Typography>
          <Grid container>
            {filteredHouses.map((house) => (
              <Grid
                item
                xs={12}
                md={4}
                key={house._id}
                sx={{
                  padding: '5px',
                }}
              >
                <HouseCard key={house._id} data={house} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SalePage;
