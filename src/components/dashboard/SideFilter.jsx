import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SideFilter({ purpose = 'sale', filtersOptions = {} }) {
  const [filters, setFilters] = useState({
    purpose: purpose,
    bedrooms: '',
    bathrooms: '',
    price: '',
    area: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFilters(filtersOptions);
  };

  const applyFiltersHandler = (e) => {
    e.preventDefault();
    if (filters.purpose === 'rent') {
      navigate(
        `/dashboard/rent?bedrooms=${filters.bedrooms}&bathrooms=${filters.bathrooms}&price=${filters.price}&area=${filters.area}`
      );
    } else {
      navigate(
        `/dashboard/sale?bedrooms=${filters.bedrooms}&bathrooms=${filters.bathrooms}&price=${filters.price}&area=${filters.area}`
      );
    }
  };

  return (
    <Box
      sx={{
        width: { xs: '100%', lg: 300 },
        padding: 0,
        paddingTop: 2,
        height: { xs: 'auto', lg: '100%' },
        borderRadius: 0,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          p: 3,
          boxShadow: 3,
          width: { xs: '100%', lg: '280px' },
          position: { xs: 'block', lg: 'fixed' },
          left: { lg: '10px' },
          height: '80%',
          // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Background with opacity for the inner box
          backgroundColor: '#9cc0cf3f',
        }}
      >
        <Typography variant='h6' gutterBottom>
          Filter Properties
        </Typography>
        <form onSubmit={applyFiltersHandler}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='bedrooms'
                name='bedrooms'
                label='Number of bedrooms'
                value={filters.bedrooms}
                onChange={handleChange}
                type='number'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id='bathrooms'
                name='bathrooms'
                label='Number of bathrooms'
                value={filters.bathrooms}
                onChange={handleChange}
                type='number'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id='price'
                name='price'
                label='Price'
                value={filters.price}
                onChange={handleChange}
                type='number'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id='area'
                name='area'
                label='Area (sq ft)'
                value={filters.area}
                onChange={handleChange}
                type='number'
              />
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItem: 'center',
                  mb: 2,
                }}
              >
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  sx={{ mb: 2 }}
                >
                  Apply Filters
                </Button>
                <Button variant='outlined' onClick={handleClear}>
                  Clear
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default SideFilter;
