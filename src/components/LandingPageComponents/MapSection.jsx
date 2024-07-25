import React from 'react';
import  Typography  from '@mui/material/Typography';

const MapSection = () => {
    return (
        <>
        <Typography variant='h5' textAlign={"center"} p={2} >
         <b>Choose a loction whereever you want</b> 
        </Typography>
        <Typography color={'GrayText'} fontSize={16} textAlign={"center"}>Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
            Iusto aliquid nesciuntaut eveniet
        </Typography>
        <img src="src\assets\landingpageImages\World-Map.png" alt="map" style={{width:"80vw",height:"500px",display:"block" ,marginLeft:"auto",marginRight:"auto"}} />

        </>
            
        
    );
}

export default MapSection;
