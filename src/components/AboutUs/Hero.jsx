import { Box, Typography } from '@mui/material';
import React from 'react';

const Hero = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url("/assets/images/aboutus.jpg")`,
          backgroundSize: 'cover',
          height: '400px',
        }}
      >
        <Box
          sx={{ bgcolor: `#9cc0cfd0`, textAlign: 'center', height: '400px' }}
        >
          <Box p={10}>
            <Typography p={2} variant='h1' component={'p'} color={'black'}>
              About us
            </Typography>
            <Typography variant='p' color={'#333'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsa
              nobis temporibus dolor natus repudiandae earum obcaecati voluptas
              error hic cum quae placeat.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
