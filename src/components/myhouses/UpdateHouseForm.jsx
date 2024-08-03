import React, { useState, useEffect } from 'react';
import { patchMyHousesService } from '../../services/houseService';
import {
  TextField,
  Paper,
  Typography,
  Button,
  Grid,
  Select,
  MenuItem,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { housesActions } from '../../store/houses-slice';

function UpdateHouseForm({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newHouse, setNewHouse] = useState({
    address: {
      street: '',
      city: '',
      governorate: '',
    },
    images: [],
    title: '',
    description: '',
    price: '',
    type: '',
    imageUrl: '',
    rate: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
  });

  const [loading, setLoading] = useState(false);

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  useEffect(() => {
    if (data) {
      setNewHouse({
        address: {
          street: data.address.street,
          city: data.address.city,
          governorate: data.address.governorate,
        },
        images: data.images,
        title: data.title,
        description: data.description,
        price: data.price,
        type: data.type,
        imageUrl: data.imageUrl,
        rate: data.rate,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        area: data.area,
      });
    }
  }, [data]);

  const handleChangeInput = (e) => {
    const propertyName = e.target.name.split('.')[1];
    if (e.target.name.split('.').length === 1) {
      setNewHouse((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else {
      setNewHouse((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [propertyName]: e.target.value,
        },
      }));
    }
  };

  const handleImageFiles = (e) => {
    const files = Array.from(e.target.files);
    setNewHouse((prevState) => ({
      ...prevState,
      images: files,
    }));
  };

  const handleImageUrl = (e) => {
    setNewHouse((prevState) => ({
      ...prevState,
      imageUrl: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('address.street', newHouse.address.street);
    formData.append('address.city', newHouse.address.city);
    formData.append('address.governorate', newHouse.address.governorate);
    formData.append('title', newHouse.title);
    formData.append('description', newHouse.description);
    formData.append('price', newHouse.price);
    formData.append('type', newHouse.type);
    formData.append('rate', '3');
    formData.append('bedrooms', newHouse.bedrooms);
    formData.append('bathrooms', newHouse.bathrooms);
    formData.append('area', newHouse.area);

    if (newHouse.imageUrl) {
      formData.append('imageUrl', newHouse.imageUrl);
    }

    newHouse.images.forEach((image) => {
      if (image) formData.append('images', image);
    });

    const response = await patchMyHousesService(data._id, formData);

    if (response.status === 'success') {
      setSnackbarMessage('House edited successfully!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setTimeout(() => {
        navigate('/dashboard/myhouses');
      }, 3000);
    } else {
      setSnackbarMessage('Error editing house. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
    setLoading(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Paper
      elevation={3}
      sx={{ margin: 'auto', marginTop: '30px', p: 4, width: '60%' }}
    >
      <Typography variant='h4' gutterBottom textAlign={'center'}>
        Update House
      </Typography>
      <form style={{ margin: 'auto' }} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label='Title'
              name='title'
              value={newHouse.title}
              onChange={handleChangeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Description'
              value={newHouse.description}
              name='description'
              onChange={handleChangeInput}
              fullWidth
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>Address</Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              label='Street'
              value={newHouse.address.street}
              name='address.street'
              onChange={handleChangeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label='City'
              value={newHouse.address.city}
              name='address.city'
              onChange={handleChangeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label='Governorate'
              value={newHouse.address.governorate}
              name='address.governorate'
              onChange={handleChangeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>Images</Typography>
            <TextField
              type='file'
              inputProps={{ multiple: true }}
              onChange={handleImageFiles}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>Main Image</Typography>
            <TextField
              name='imageUrl'
              type='file'
              onChange={handleImageUrl}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Price'
              value={newHouse.price}
              name='price'
              onChange={handleChangeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Type</Typography>
            <Select
              label='Type'
              value={newHouse.type}
              name='type'
              onChange={(e) =>
                setNewHouse((prevState) => ({
                  ...prevState,
                  type: e.target.value,
                }))
              }
              fullWidth
            >
              <MenuItem value='rent'>Rent</MenuItem>
              <MenuItem value='sale'>Sale</MenuItem>
            </Select>
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              label='Rate'
              name='rate'
              value={newHouse.rate}
              onChange={handleChangeInput}
              fullWidth
            />
          </Grid> */}
          <Grid item xs={6}>
            <TextField
              label='Bedrooms'
              name='bedrooms'
              value={newHouse.bedrooms}
              onChange={handleChangeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Bathrooms'
              name='bathrooms'
              value={newHouse.bathrooms}
              onChange={handleChangeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Area'
              name='area'
              value={newHouse.area}
              onChange={handleChangeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
              sx={{ marginTop: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Submit'}
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          variant='filled'
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Paper>
  );
}

export default UpdateHouseForm;
