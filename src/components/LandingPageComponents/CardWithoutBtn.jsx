import CardMedia  from '@mui/material/CardMedia';
import  Card  from '@mui/material/Card';
import React from 'react';
import { CardContent, Divider, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
const greylight=grey[200];
const grey5=grey[500];

const CardWithoutBtn = () => {
    return (
     <Stack direction={"row"} spacing={4} p={3} justifyContent={'center'}>

        <Card sx={{ width:"300px","&:hover":{transform:"scale(1.05)", boxShadow:`5px 5px 24px ${grey[300]}` }}}>
            <CardMedia
            component={"img"}
            image='src\assets\landingpageImages\2.jpg'
            height='200px'>
            </CardMedia>
            <CardContent>
            <Typography variant='p' fontSize={18} > <b>Modern </b> </Typography>
            <Divider orientation='horizontal' color={greylight}></Divider>
            <Typography variant='p' fontSize={16}>$1500.00
              <span style={{color:`${grey5}`, fontWeight:"200"}}> | </span> <b> New </b>
            </Typography>
            <br />
            <Typography variant='p' fontSize={12} color={grey[700]}>6 Bads
                  <span style={{color:`${grey5}`, fontWeight:"200"}}> | </span> 4 Baths
                   <span style={{color:`${grey5}`, fontWeight:"200"}}> | </span> 4,458 Sq.Ft 
            </Typography>
            </CardContent>
        </Card>
        <Card sx={{ width:"300px","&:hover":{transform:"scale(1.05)", boxShadow:`5px 5px 24px ${grey[300]}` }}}>
            <CardMedia
            component={"img"}
            image='src\assets\landingpageImages\bluehouse.png'
            height='200px'>
            </CardMedia>
            <CardContent>
            <Typography variant='p' fontSize={18} > <b>Meadow view</b> </Typography>
            <Divider orientation='horizontal' color={greylight}></Divider>
            <Typography variant='p' fontSize={16}>$570.00
              <span style={{color:`${grey5}`, fontWeight:"200"}}> | </span> <b> New </b>
            </Typography>
            <br />
            <Typography variant='p' fontSize={12} color={grey[700]}>5 Bads
                  <span style={{color:`${grey5}`, fontWeight:"200"}}> | </span> 3 Baths
                   <span style={{color:`${grey5}`, fontWeight:"200"}}> | </span> 3,458 Sq.Ft 
            </Typography>
            </CardContent>
        </Card> 
        <Card sx={{ width:"300px","&:hover":{transform:"scale(1.05)", boxShadow:`5px 5px 24px ${grey[300]}` }}}>
            <CardMedia
            component={"img"}
            image='src\assets\landingpageImages\cozyhome.jpg'
            height='200px'>
            </CardMedia>
            <CardContent>
            <Typography variant='p' fontSize={18} > <b>Cottage Home</b> </Typography>
            <Divider orientation='horizontal' color={greylight}></Divider>
            <Typography variant='p' fontSize={16}>$1000.00
              <span style={{color:`${grey5}`, fontWeight:"200"}}> | </span> <b> New </b>
            </Typography>
            <br />
            <Typography variant='p' fontSize={12} color={grey[700]}>8 Bads
                  <span style={{color:`${grey5}`, fontWeight:"200"}}> | </span> 4 Baths
                   <span style={{color:`${grey5}`, fontWeight:"200"}}> | </span> 5,458 Sq.Ft 
            </Typography>
            </CardContent>
        </Card>
     </Stack>
     
    );
}

export default CardWithoutBtn;
