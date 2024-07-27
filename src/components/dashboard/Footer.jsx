import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

function SimpleFooter() {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: 'secondary.main',
        color: 'primary.main',
        py: 3,
        mt: 8,
      }}
    >
      <Container maxWidth='xl'>
        <Typography variant='body1' align='center' gutterBottom>
          © {new Date().getFullYear()} DwellingDeals. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 1 }}>
          <Link href='/dashboard' color='inherit' underline='hover'>
            Home
          </Link>
          <Link href='/dashboard/buy' color='inherit' underline='hover'>
            Buy House
          </Link>
          <Link href='/dashboard/rent' color='inherit' underline='hover'>
            Rent House
          </Link>
          <Link href='/dashboard/myhouses' color='inherit' underline='hover'>
            Sell House
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default SimpleFooter;
