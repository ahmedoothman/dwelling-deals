import React, { useState } from 'react';
import {
  TextField,
  Box,
  Paper,
  Typography,
  Button,
  Grid,
  Select,
  MenuItem,
  CircularProgress,
} from '@mui/material';
import { postMyHousesService } from '../../services/houseService';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { housesActions } from '../../store/houses-slice';

function AddHouseForm() {
  const user = useSelector((state) => state.auth.user);
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
    imageUrl: '',
    rate: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
  });
  const [type, setType] = useState('rent');
  const [loading, setLoading] = useState(false);

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
    try {
      const formData = new FormData();
      formData.append('address[street]', newHouse.address.street);
      formData.append('address[city]', newHouse.address.city);
      formData.append('address[governorate]', newHouse.address.governorate);
      formData.append('title', newHouse.title);
      formData.append('description', newHouse.description);
      formData.append('imageUrl', newHouse.imageUrl);
      formData.append('price', newHouse.price);
      formData.append('type', type);
      formData.append('rate', newHouse.rate);
      formData.append('bedrooms', newHouse.bedrooms);
      formData.append('bathrooms', newHouse.bathrooms);
      formData.append('area', newHouse.area);

      newHouse.images.forEach((image) => {
        formData.append('images', image);
      });

      const response = await postMyHousesService(formData);
      const tempData = { ...response.data, realtor: user };
      dispatch(housesActions.addHouse(tempData));
      navigate('/dashboard/myhouses');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ margin: 'auto', marginTop: '30px', p: 4, width: '45%' }}
    >
      <Typography variant='h4' gutterBottom textAlign={'center'}>
        Add New House
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
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label='Description'
              value={newHouse.description}
              name='description'
              onChange={handleChangeInput}
              fullWidth
              required
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
              required
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              label='City'
              value={newHouse.address.city}
              name='address.city'
              onChange={handleChangeInput}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              label='Governorate'
              value={newHouse.address.governorate}
              name='address.governorate'
              onChange={handleChangeInput}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Typography>Images</Typography>
            <TextField
              type='file'
              inputProps={{ multiple: true }}
              onChange={handleImageFiles}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Typography>Main Image</Typography>
            <TextField
              name='imageUrl'
              type='file'
              onChange={handleImageUrl}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label='Price'
              value={newHouse.price}
              name='price'
              onChange={handleChangeInput}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Typography>Type</Typography>
            <Select
              label='Type'
              value={type}
              name='type'
              onChange={(e) => setType(e.target.value)}
              fullWidth
              required
            >
              <MenuItem value='rent'>Rent</MenuItem>
              <MenuItem value='sale'>Sale</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label='Rate'
              name='rate'
              value={newHouse.rate}
              onChange={handleChangeInput}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='Bedrooms'
              name='bedrooms'
              value={newHouse.bedrooms}
              onChange={handleChangeInput}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='Bathrooms'
              name='bathrooms'
              value={newHouse.bathrooms}
              onChange={handleChangeInput}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label='Area'
              name='area'
              value={newHouse.area}
              onChange={handleChangeInput}
              fullWidth
              required
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
    </Paper>
  );
}

export default AddHouseForm;
