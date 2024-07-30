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
          {/* page header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              // m: 2,
              backgroundColor: '#9cc0cf3f',
              color: 'primary',
              padding: '0 10px',
              paddingTop: '10px',
              borderRadius: '5px',
              marginLeft: { md: '15px' },
            }}
          >
            <Typography variant='h4' gutterBottom>
              Houses for Sale
            </Typography>
            <Typography
              variant='h6'
              gutterBottom
              sx={{
                display: 'flex',
                alignItems: 'center',
                opacity: 0.7,
                fontSize: '1.2rem',
              }}
            >
              Results: {filteredHouses.length}
            </Typography>
          </Box>
          {/* houses grid */}
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
