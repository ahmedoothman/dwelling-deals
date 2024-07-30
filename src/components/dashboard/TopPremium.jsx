import React from 'react';
import HouseCard from './HouseCard';
import { Box, Grid } from '@mui/material';

function TopPremium({ title, data }) {
  return (
    <Box
      sx={{
        width: { md: '90%', margin: '15px auto' },
      }}
    >
      <h2>{title}</h2>
      <Grid container>
        {data?.map((item, index) => {
          return (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              sx={{
                padding: '10px',
              }}
            >
              <HouseCard key={index} data={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default TopPremium;
