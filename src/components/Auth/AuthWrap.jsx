import React from 'react';
import { Box } from '@mui/system';
function AuthWrap({ children }) {
  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#000000af',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'calc(10px + 2vmin)',
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '20px',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '600px',
            margin: '40px',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default AuthWrap;
