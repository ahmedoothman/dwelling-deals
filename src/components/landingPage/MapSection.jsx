import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const MapSection = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: { xs: 2, md: 4 } }}>
      <Typography variant='h5' textAlign='center' p={2}>
        <b>Choose a location wherever you want</b>
      </Typography>
      <Typography
        color='GrayText'
        fontSize={{ xs: 14, md: 16 }}
        textAlign='center'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
        Iusto aliquid nesciuntaut eveniet
      </Typography>
      <Box
        component='img'
        src='src/assets/images/World-Map.png'
        alt='map'
        sx={{
          width: { xs: '100%', sm: '90%', md: '80%' },
          height: 'auto',
          display: 'block',
          margin: '20px auto',
          maxHeight: { xs: '300px', sm: '400px', md: '500px' },
        }}
      />
    </Box>
  );
};

export default MapSection;
