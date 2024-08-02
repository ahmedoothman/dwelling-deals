import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import BedRoundedIcon from '@mui/icons-material/BedRounded';
import BathtubRoundedIcon from '@mui/icons-material/BathtubRounded';
import AspectRatioRoundedIcon from '@mui/icons-material/AspectRatioRounded';
import { Link } from 'react-router-dom';
import { PRIMARY_COLOR_DARK } from '../../constants/styles/colors';
import { GridLoader } from 'react-spinners';

function HouseCard(props) {
  const house = props.data;
  // const [like, setlike] = useState(false);
  // const handleIcon = () => {
  //   setlike(!like);
  // };
  // const handleDelete=function(id){
  //     deleteMyHousesService(id);
  // }
  if (!house) {
    return <GridLoader size={30} color={PRIMARY_COLOR_DARK} />;
  }
  return (
    <>
      <Card
        sx={{
          width: '100%',
          maxWidth: '360px',
          margin: { xs: '10px 0', md: '0px' },
          '&:hover': {
            boxShadow: `5px 5px 24px ${grey[300]}`,
            cursor: 'pointer',
          },
        }}
      >
        <CardMedia
          component={'img'}
          alt={'House'}
          height={'200px'}
          image={house.imageUrl}
        />
        <CardContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '5' }}
        >
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant='P' color={blue[900]}>
              {house.type === 'sale' ? (
                <b>{house.price.toLocaleString()} EGP</b>
              ) : (
                <b>
                  {house.price.toLocaleString()} EGP
                  <Typography
                    variant='span'
                    sx={{
                      color: 'primary.main',
                      fontSize: '10pt',
                      opacity: 0.7,
                    }}
                  >
                    /month
                  </Typography>
                </b>
              )}
            </Typography>
          </Stack>
          <Typography variant='p'>{house.title}</Typography>
          <Typography variant='p'>Type : {house.type}</Typography>

          <Stack
            direction={'row'}
            gap={2}
            sx={{ color: grey[700], fontSize: '10pt', marginTop: '15px' }}
          >
            <Stack direction={'row'} gap={1}>
              <BedRoundedIcon sx={{ fontSize: '15pt' }} />
              <Typography variant='p'>{house.bedrooms} beds</Typography>
            </Stack>
            <Stack direction={'row'} gap={1}>
              <BathtubRoundedIcon sx={{ fontSize: '15pt' }} />
              <Typography variant='p'>{house.bathrooms} Baths</Typography>
            </Stack>
            <Stack direction={'row'} gap={1}>
              <AspectRatioRoundedIcon sx={{ fontSize: '15pt' }} />
              <Typography variant='p'>{house.area} SqFt</Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            // justifyContent: 'flex-end',
          }}
        >
          <Button
            variant='text'
            color='error'
            sx={{ borderRadius: '15px' }}
            onClick={() => {
              props.handleDelete(house._id);
            }}
          >
            Delete
          </Button>
          <Button
            variant='text'
            color='info'
            sx={{ borderRadius: '15px' }}
            component={Link}
            to={`update/${house._id}`}
          >
            Edit
          </Button>

          <Button
            variant='text'
            color='info'
            // size='small'
            sx={{ borderRadius: '15px' }}
            component={Link}
            to={`/dashboard/housedetails/${house._id}`}
          >
            More info
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default HouseCard;
