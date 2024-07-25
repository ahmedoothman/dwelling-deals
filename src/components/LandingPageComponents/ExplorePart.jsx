import  Typography  from '@mui/material/Typography';
import React from 'react';
import CardWithoutBtn from './CardWithoutBtn';

const ExplorePart = () => {
    return (
        <>
        <Typography variant='h5' textAlign={"center"} p={2}>
         <b>Explore the popular residences</b> 
        </Typography>
        <Typography color={'GrayText'} fontSize={16} textAlign={"center"}>Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
            Iusto aliquid nesciuntaut eveniet
        </Typography>
        <CardWithoutBtn></CardWithoutBtn>
        </>
    );
}

export default ExplorePart;
