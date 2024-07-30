import React from 'react';
import { Box, Typography } from '@mui/material';

function PageHeader({ title, numberOfResults, styles }) {
  return (
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
        ...styles,
      }}
    >
      <Typography variant='h4' gutterBottom>
        {title}
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
        Results: {numberOfResults}
      </Typography>
    </Box>
  );
}

export default PageHeader;
