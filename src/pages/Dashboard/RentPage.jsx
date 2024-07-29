import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import SideFilter from '../../components/dashboard/SideFilter';
import useFilteredHouses from '../../hooks/useFilteredHouses';

function RentPage() {
  const { filteredHouses, filtersState } = useFilteredHouses('rent');

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <SideFilter purpose={'rent'} filtersOptions={filtersState} />
      </Grid>
      <Grid item xs={12} md={9}>
        <Box sx={{ padding: 2 }}>
          <Typography variant='h4'>RentPage</Typography>
          <Typography variant='h6'>
            Results : {filteredHouses.length}
          </Typography>
          <Grid container>
            {filteredHouses.map((house) => (
              <Grid item xs={12} md={4}>
                <Box
                  key={house._id}
                  style={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '10px',
                    margin: '10px',
                    listStyleType: 'none',
                  }}
                >
                  <h2>{house.title}</h2>
                  <Box
                    sx={{
                      width: '100%',
                      height: '200px',
                      overflow: 'hidden',
                      borderRadius: '5px',
                      marginBottom: '10px',
                    }}
                  >
                    <img src={house.imageUrl} alt={house.title} />
                  </Box>
                  <p>{house.description}</p>
                  <p>{house.price}</p>
                  <p>{house.area}</p>
                  <p>{house.bedrooms}</p>
                  <p>{house.bathrooms}</p>
                  <p>{house.realtor.name}</p>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default RentPage;
