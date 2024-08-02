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
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BedRoundedIcon from '@mui/icons-material/BedRounded';
import BathtubRoundedIcon from '@mui/icons-material/BathtubRounded';
import AspectRatioRoundedIcon from '@mui/icons-material/AspectRatioRounded';
import { Link } from 'react-router-dom';
import { PRIMARY_COLOR_DARK } from '../../constants/styles/colors';
import { GridLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux';
import { housesActions } from '../../store/houses-slice';

import {
  removeFromMyWishListService,
  addToMyWishListService,
} from '../../services/wishlistService';
function HouseCard(props) {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.houses);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const house = props.data;

  useEffect(() => {
    if (house && wishlist) {
      const wishlisted = wishlist.some((item) => item._id === house._id);
      setIsWishlisted(wishlisted);
    }
  }, [wishlist, house]);

  const handleIcon = async () => {
    if (isWishlisted) {
      dispatch(housesActions.removeFromWishlist(house._id));
      const response = await removeFromMyWishListService(house._id);
    } else {
      dispatch(housesActions.addToWishlist(house));
      const response = await addToMyWishListService({ houseId: house._id });
    }
  };
  if (!house) {
    return <GridLoader size={30} color={PRIMARY_COLOR_DARK} />;
  }
  return (
    <>
      <Card
        sx={{
          width: { xs: '100%' },
          margin: { xs: '10px 0', md: '0px auto' },
          maxWidth: '360px',
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
            <IconButton onClick={handleIcon}>
              {isWishlisted ? (
                <FavoriteRoundedIcon color='error' />
              ) : (
                <FavoriteBorderRoundedIcon />
              )}
            </IconButton>
          </Stack>
          <Typography variant='p'>{house.title}</Typography>
          <Stack
            direction={'row'}
            gap={2}
            sx={{ color: grey[700], fontSize: '10pt', marginTop: '15px' }}
          >
            <Stack direction={'row'}>
              <BedRoundedIcon sx={{ fontSize: '15pt', mr: '2px' }} />
              <Typography variant='p'>{house.bedrooms} beds</Typography>
            </Stack>
            <Stack direction={'row'}>
              <BathtubRoundedIcon sx={{ fontSize: '15pt', mr: '2px' }} />
              <Typography variant='p'>{house.bathrooms} Baths</Typography>
            </Stack>
            <Stack direction={'row'}>
              <AspectRatioRoundedIcon sx={{ fontSize: '15pt', mr: '2px' }} />
              <Typography variant='p'>{house.area} SqFt</Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant='contained'
            color='primary'
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
