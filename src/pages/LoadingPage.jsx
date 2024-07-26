import React from 'react';
import { GridLoader } from 'react-spinners';
import { Box, Container } from '@mui/material';

export default function LoadingPage() {
  return (
    <Container component='main' maxWidth='xs' disableGutters>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <GridLoader size={30} color='#1976d2' />
      </Box>
    </Container>
  );
}
