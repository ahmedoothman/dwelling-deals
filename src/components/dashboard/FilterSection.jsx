import React, { useState } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function FilterSection({
  hidePurpose = false,
  purpose = 'sale',
  filtersOptions = {},
}) {
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
    e.preventDefault(); // Prevent default form submission
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
        boxShadow: 3,
        borderRadius: 2,
        width: { xs: '100%', sm: '90%' },
        margin: '0 auto',
        marginTop: 6,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage:
          'url(https://images.pexels.com/photos/11718917/pexels-photo-11718917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#9cc0cf3f',
          borderRadius: 2,
          padding: 3,
        }}
      >
        <Box
          sx={{
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            width: '90%',
            margin: '0 auto',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          <Typography variant='h6' gutterBottom>
            Filter Properties
          </Typography>
          <form onSubmit={applyFiltersHandler}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
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

              <Grid item xs={12} sm={6} md={4}>
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

              <Grid item xs={12} sm={6} md={4}>
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

              <Grid item xs={12} sm={6} md={4}>
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
              <Grid item xs={12} sm={6} md={4}>
                {!hidePurpose && (
                  <FormControl fullWidth>
                    <InputLabel id='purpose-label'>Purpose</InputLabel>
                    <Select
                      labelId='purpose-label'
                      id='purpose'
                      name='purpose'
                      value={filters.purpose}
                      label='Purpose'
                      onChange={handleChange}
                    >
                      <MenuItem value='rent'>Rent</MenuItem>
                      <MenuItem value='sale'>Sale</MenuItem>
                    </Select>
                  </FormControl>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Box
                  sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}
                >
                  <Button
                    variant='outlined'
                    onClick={handleClear}
                    sx={{ mr: 2 }}
                  >
                    Clear
                  </Button>
                  <Button variant='contained' color='primary' type='submit'>
                    Apply Filters
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default FilterSection;
