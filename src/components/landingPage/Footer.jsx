import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const liststyle = {
  listStyleType: 'none',
  fontSize: 8,
  color: `${grey[700]}`,
  padding: '10px',
  margin: '5px',
  lineHeight: '2.5',
};

const Footer = () => {
  return (
    <Box sx={{ mt: 5, p: { xs: 2, sm: 3, md: 4 } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: 16, md: 20 } }}
          >
            DwellingDeals
          </Typography>
          <Typography
            variant='body2'
            color={grey[700]}
            sx={{ fontSize: { xs: 12, md: 14 } }}
          >
            Lorem ipsum dolor sit amet consectetur
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: 14, md: 16 } }}
          >
            Company
          </Typography>
          <ul style={liststyle}>
            <li>Dwelling Deals</li>
            <li>Team</li>
            <li>House rent</li>
            <li>Sales</li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: 14, md: 16 } }}
          >
            Navigate
          </Typography>
          <ul style={liststyle}>
            <li>Roadmap</li>
            <li>House</li>
            <li>Explore</li>
            <li>Email</li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: 14, md: 16 } }}
          >
            Products
          </Typography>
          <ul style={liststyle}>
            <li>Rent</li>
            <li>Sale</li>
            <li>Buy</li>
            <li>Home</li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: 14, md: 16 } }}
          >
            Contact Us
          </Typography>
          <ul style={liststyle}>
            <li>Phone</li>
            <li>Email</li>
            <li>0145124589</li>
            <li>DwellingDeals@gmail.com</li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              mt: 2,
              fontSize: { xs: 10, md: 12 },
            }}
          >
            <Typography color={grey[700]}>&copy; 2024 DwellingDeals</Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'space-between' },
                mt: { xs: 1, md: 0 },
              }}
            >
              <Typography
                color={grey[700]}
                sx={{ mr: { xs: 2, md: 4 }, cursor: 'pointer' }}
              >
                Terms & Agreements
              </Typography>
              <Typography color={grey[700]} sx={{ cursor: 'pointer' }}>
                Privacy Policy
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
