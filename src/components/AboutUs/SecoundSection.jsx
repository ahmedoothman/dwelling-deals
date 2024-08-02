import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const SecoundSection = () => {
  return (
    <>
      <Box margin={'40px 0px'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box p={3} width={'70%'} margin={'0 auto'}>
              <Typography variant='h5' color={'black'} mb={3}>
                <b>About Company</b>
              </Typography>
              <Typography variant='p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                odio tempore quaerat deserunt,uisquam veniam aspernatur, quidem
                qui iure harum rem. Soluta aut .
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundImage: `url("src/assets/images/secabout.jpg")`,
                backgroundSize: 'cover',
                width: '70%',
                margin: '0 auto',
              }}
              borderRadius={'15px'}
              width={'40%'}
              height={'350px'}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SecoundSection;
