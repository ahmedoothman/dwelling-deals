import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Grid
} from '@mui/material';
import HouseCard from '../../../components/myhouses/HouseCard';
import {getMyHousesService,deleteMyHousesService} from '../../../services/houseService'
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
function MyHouses() {
  
  const [Myhouses,setMyhouses]=useState([]);
  const deleteHouse = (id) => {
     deleteMyHousesService(id);
     setMyhouses((prevhouses) => prevhouses.filter((house) => house._id !== id));
     
  };
  
  useEffect(
    function(){
     async function FetchMyHouses(){
         const houses= await getMyHousesService()
         setMyhouses(houses.data)
       
      }
      FetchMyHouses();
    },[])
  return <Box>
      <Box sx={{display:"flex",justifyContent:"flex-end"}}>
       <Button variant="contained" sx={{mr:"23px",mt:"20px"}} component={Link} to="add" startIcon={<AddIcon></AddIcon>}>Add House</Button>
      </Box>
    <Grid container>
      {Myhouses?.map((item, index) => {
        return (
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            key={index}
            sx={{
              padding: '10px',
            }}
          >
            <HouseCard key={index} data={item} handleDelete={deleteHouse}/>
          </Grid>
        );
      })}
    </Grid>
  
</Box>  
  
  ;
  
}

export default MyHouses;
