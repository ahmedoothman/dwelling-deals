import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, IconButton, Stack, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BedRoundedIcon from '@mui/icons-material/BedRounded';
import BathtubRoundedIcon from '@mui/icons-material/BathtubRounded';
import AspectRatioRoundedIcon from '@mui/icons-material/AspectRatioRounded';
import { useSelector } from 'react-redux';
import LoadingPage from '../../pages/LoadingPage';
import { Link } from 'react-router-dom';

function HouseCard(props) {
  
  const house=props.data
  const [like,setlike]=useState(false)
   const handleIcon=()=>{
     setlike(!like)
   }
   
   if(!house){
    return <LoadingPage></LoadingPage>
   }
  return <>
   <Card
    sx={{
      width: '300px',
      margin:"10px",
      '&:hover': {
       
        boxShadow: `5px 5px 24px ${grey[300]}`,
      },
    }}
   >
    <CardMedia
     component={"img"}
     alt={"House"}
     height={"200px"}
     image={house.imageUrl}
    />
    <CardContent sx={{display:'flex', flexDirection:"column",gap:"5"}}>
         <Stack direction={"row"} justifyContent={'space-between'}>           
            <Typography variant='P' color={blue[900]}><b>{house.price}$</b></Typography>
            <IconButton onClick={handleIcon}>
              {like?<FavoriteRoundedIcon color='error'/>: <FavoriteBorderRoundedIcon/>}
            </IconButton> 
        </Stack>
      <Typography  variant='p' >{house.title}</Typography>
      <Stack direction={'row'} gap={2} sx={{color:grey[700],fontSize:"10pt",marginTop:"15px"}}>
        
        <Stack direction={"row"} gap={1}>
          <BedRoundedIcon sx={{fontSize:"15pt"}} />
          <Typography  variant='p'>{house.bedrooms} beds</Typography>
        </Stack>
        <Stack direction={"row"} gap={1}>
          <BathtubRoundedIcon sx={{fontSize:"15pt"}}/>
          <Typography  variant='p'>{house.bathrooms} Baths</Typography>
        </Stack>
        <Stack direction={"row"} gap={1}>
          <AspectRatioRoundedIcon sx={{fontSize:"15pt"}} />
          <Typography  variant='p' >{house.area} SqFt</Typography>
        </Stack>
      </Stack>
    </CardContent>
    <CardActions>
      <Button variant="contained" color='info' sx={{borderRadius:"15px"}} component={Link} to={`houses/${house._id}`}>More info</Button>
    </CardActions>
    

   </Card>
  
  
  
  
  </>
  ;
}

export default HouseCard;
