import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import CropOriginalOutlinedIcon from '@mui/icons-material/CropOriginalOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import {
  Container,
  Box,
  Card,
  Button,
  CardContent,
  CardMedia,
  Typography,
  Rating,
} from '@mui/material';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import '@fontsource/sevillana';
import Divider from '@mui/material/Divider';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import {setHouses} from ".../store/houses-slice.js"

function HouseDetails() {
  const houses = useSelector((state) => state.houses.houses);
  const [house, setHouse] = useState(null);
  const dispatch = useDispatch();

  const { id } = useParams();
  // const house = houses.find(houseObj => houseObj._id === id);'

  useEffect(() => {
    // dispatch(setHouses());
    setHouse(houses[30]);
    console.log(houses[30]);
  }, [houses]);

  if (!house) {
    return <div>Loading...</div>;
  }
  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Box sx={{ marginLeft: '7%' }}>
        {/*small heading*/}
        <Typography variant='h4' mt={3}>
          {house.title}
        </Typography>
        <Typography
          variant='p'
          color={'gray'}
          display='flex'
          alignItems='flex-start'
          justifyContent='flex-start'
        >
          {house.address.city}, {house.address.street},{' '}
          {house.address.governorate}
          <Rating
            name='customized-1'
            defaultValue={1}
            max={1}
            size='small'
            readOnly
          />
          {house.rate}
        </Typography>

        {/*imageBox Section*/}
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
        >
          {/*First ImageBox in section*/}
          <Box sx={{ marginTop: '2%' }}>
            {/* <Box sx={{width: { md: '100%', sm: '50%', xs: '50%' }}}> */}
            <img
              src={house.imageUrl}
              style={{ width: '100%', borderRadius: '5px' }}
            ></img>
            {/* </Box> */}
          </Box>

          {/*Second 3Images Box in section*/}
          <Box
            mt={1}
            display={'flex'}
            justifyContent={'flex-start'}
            alignContent={'flex-start'}
            gap={1}
          >
            {house.images.map((image, index) => (
              <Box key={index} width={'29%'}>
                <img
                  src={image}
                  style={{ width: '100%', borderRadius: '5px' }}
                ></img>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          mt={3}
          width={'100%'}
          display={'flex'}
          justifyContent={'space-between'}
          flexDirection={'column'}
          gap={2}
        >
          <Box>
            <Typography variant='h4'>Details</Typography>
          </Box>

          <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} gap={1}>
            <Box
              display={'flex'}
              justifyContent={'center'}
              borderRadius='20px'
              p={1}
              bgcolor={'#EEEDEB'}
              gap={1}
              sx={{
                marginLeft: '2%',
              }}
            >
              <LocalAtmOutlinedIcon />
              {/* seperate price with commas */}
              <Typography variant='body1'>
                {house.price.toLocaleString()} EGP
              </Typography>
            </Box>

            <Box
              display={'flex'}
              justifyContent={'center'}
              gap={1}
              borderRadius='20px'
              p={1}
              bgcolor={'#EEEDEB'}
            >
              <BedroomChildOutlinedIcon />
              <Typography variant='body1'>{house.bedrooms} bedrooms</Typography>
            </Box>

            <Box
              display={'flex'}
              justifyContent={'center'}
              gap={1}
              borderRadius='20px'
              p={1}
              bgcolor={'#EEEDEB'}
            >
              <BathroomOutlinedIcon />
              <Typography variant='body1'>
                {house.bathrooms} bathrooms
              </Typography>
            </Box>

            <Box
              display={'flex'}
              justifyContent={'center'}
              gap={1}
              borderRadius='20px'
              p={1}
              bgcolor={'#EEEDEB'}
              sx={{ marginRight: '5%' }}
            >
              <CropOriginalOutlinedIcon />
              <Typography variant='body1'>{house.area} sqm</Typography>
            </Box>
          </Box>
        </Box>
        {/*About Section*/}
        <Box mt={3} width={'100%'}>
          <Typography variant='h4' mb={1}>
            About
          </Typography>
          <Typography variant='p' color={'gray'}>
            {house.description}Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis voluptatibus minus, ducimus culpa
            officiis, minima illo maxime officia et suscipit, tenetur nihil
            dolores consequatur dolore quos! Eveniet natus totam enim.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            voluptatibus minus, ducimus culpa officiis, minima illo maxime
            officia et suscipit
          </Typography>
        </Box>

        {/*Details Section*/}
        {/*Details Container*/}
      </Box>

      {/*Stack section of Realtor and Safty*/}
      <Stack direction={'column'} marginRight={'15%'}>
        {/*Realtor*/}
        <Box
          mt={13}
          sx={({ textAlign: 'center' }, { marginLeft: { xs: '8%', lg: '1%' } })}
        >
          <Card
            sx={{
              width: {
                xs: '100%',
                sm: '90%',
                md: 500,
              },
              height: {
                xs: 'auto',
                sm: 'auto',
                md: 600,
              },
            }}
            mt={3}
          >
            {/* <CardMedia
        sx={{ height: 200 , position:"relative" }}
        image={"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"}
        title="green iguana"
      /> */}
            <Box marginLeft={'34%'} marginTop={'5%'}>
              <Avatar
                sx={{ bgcolor: '#201E43', width: 150, height: 150 }}
                aria-label='recipe'
              >
                <Typography fontSize={'4.2em'}>
                  {house.realtor.name[0]}
                </Typography>
              </Avatar>
            </Box>

            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                mt={2}
                textAlign={'center'}
                // sx={{fontFamily: 'Sevillana, cursive'}} fontSize={"2.3em"}
                fontSize={'2em'}
              >
                {house.realtor.name}
              </Typography>
              <Box
                display='flex'
                alignItems='center'
                justifyContent={'center'}
                gap={1}
              >
                <Divider sx={{ width: '15%', mr: 1 }} />
                <Typography
                  variant='body2'
                  color='text.secondary'
                  fontSize={'1em'}
                  sx={{ letterSpacing: '3px' }}
                >
                  REALTOR
                </Typography>
              </Box>

              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ letterSpacing: '3px' }}
                mt={2}
                fontSize={'1.2em'}
                textAlign={'center'}
              >
                THE FALLS REALTY
              </Typography>

              {/*Contianer*/}
              <Box display={'flex'} flexDirection={'column'} mt={4} gap={2}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  gap={1}
                  borderRadius='20px'
                  p={1}
                  bgcolor={'#EEEDEB'}
                  sx={{ marginRight: '5%' }}
                >
                  <EmailOutlinedIcon />
                  <Typography variant='body1'>{house.realtor.email}</Typography>
                </Box>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  gap={1}
                  borderRadius='20px'
                  p={1}
                  bgcolor={'#EEEDEB'}
                  sx={{ marginRight: '5%' }}
                >
                  <LocalPhoneOutlinedIcon />
                  <Typography variant='body1'>
                    {house.realtor.phoneNumber}
                  </Typography>
                </Box>

                <Button variant='contained' sx={{ marginTop: '5%' }}>
                  Contact
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/*Safety */}
        <Box
          mt={12}
          p={3}
          borderRadius={2}
          bgcolor='#fff'
          sx={{ marginLeft: { xs: '4%' } }}
        >
          <Card>
            <Typography
              variant='h5'
              gutterBottom
              textAlign='center'
              sx={{ fontWeight: 'bold' }}
            >
              Your Safety Matters to Us!
            </Typography>
            <List>
              <ListItem
                sx={{
                  display: 'list-item',
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mb: 1,
                }}
              >
                Only meet in public / crowded places for example metro stations
                and malls.
              </ListItem>
              <ListItem
                sx={{
                  display: 'list-item',
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mb: 1,
                }}
              >
                Never go alone to meet a buyer / seller, always take someone
                with you.
              </ListItem>
              <ListItem
                sx={{
                  display: 'list-item',
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mb: 1,
                }}
              >
                Check and inspect the product properly before purchasing it.
              </ListItem>
              <ListItem
                sx={{
                  display: 'list-item',
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mb: 1,
                }}
              >
                Never pay anything in advance or transfer money before
                inspecting the product.
              </ListItem>
            </List>
          </Card>
        </Box>
      </Stack>
    </Stack>
  );
}

export default HouseDetails;
