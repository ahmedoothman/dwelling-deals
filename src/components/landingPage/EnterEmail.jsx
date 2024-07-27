import React from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';

const EnterEmail = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: 'secondary.main',
        width: '80%',
        maxWidth: '800px',
        margin: 'auto',
        padding: { xs: '15px', sm: '20px' },
        borderRadius: '15px',
        boxSizing: 'border-box',
      }}
    >
      <Typography
        variant='h5'
        textAlign='center'
        p={2}
        fontSize={{ xs: '16px', sm: '20px', md: '26px' }}
      >
        <b>Upgrade your home today?</b>
      </Typography>
      <Typography
        color='GrayText'
        fontSize={{ xs: 10, sm: 14 }}
        textAlign='center'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
        Iusto aliquid nesciuntaut eveniet
      </Typography>

      <Box
        sx={{
          width: { xs: '100%', sm: '80%', md: '60%' },
          borderRadius: '8px',
          padding: { xs: '10px', sm: '15px' },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          margin: 'auto',
          mt: 2,
          gap: { xs: 1, sm: 2 },
          fontSize: { xs: 12, sm: 14 },
        }}
      >
        <TextField
          fullWidth
          id='standard-basic'
          label='Enter your email...'
          size='small'
          variant='outlined'
          sx={{ flex: 1, backgroundColor: 'white', borderRadius: '10px' }}
        />
        <Button
          variant='contained'
          size='medium'
          sx={{
            textTransform: 'none',
            backgroundColor: '#070324',
            mt: { xs: 1, sm: 0 },
            padding: { xs: '6px 16px', sm: '6px 20px' },
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default EnterEmail;
