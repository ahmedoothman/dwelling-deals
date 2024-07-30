import React, { useEffect, useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import HouseCard from '../../../components/myhouses/HouseCard';
import {
  getMyHousesService,
  deleteMyHousesService,
} from '../../../services/houseService';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import AddHomeWorkRoundedIcon from '@mui/icons-material/AddHomeWorkRounded';
import { PRIMARY_COLOR_DARK } from '../../../constants/styles/colors';
import GridLoader from 'react-spinners/GridLoader';
import { useDispatch } from 'react-redux';
import { housesActions } from '../../../store/houses-slice';
function MyHouses() {
  const [Myhouses, setMyhouses] = useState([]);
  const dispatch = useDispatch();
  const deleteHouse = (id) => {
    deleteMyHousesService(id);
    dispatch(housesActions.deleteHouse(id));
    setMyhouses((prevhouses) => prevhouses.filter((house) => house._id !== id));
  };

  useEffect(function () {
    async function FetchMyHouses() {
      const houses = await getMyHousesService();
      setMyhouses(houses.data);
    }
    FetchMyHouses();
  }, []);

  return (
    <Box>
      {Myhouses.length === 0 && (
        <Box
          sx={{
            textAlign: 'center',
            mt: '20px',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <GridLoader color={PRIMARY_COLOR_DARK} loading={true} size={20} />
        </Box>
      )}
      {Myhouses.length > 0 && (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant='contained'
              sx={{ mr: '23px', mt: '20px' }}
              component={Link}
              to='add'
              startIcon={<AddHomeWorkRoundedIcon fontSize='large' />}
            >
              Add House
            </Button>
          </Box>
          <Grid
            container
            sx={{
              padding: '0',
            }}
          >
            {Myhouses?.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={3}
                  key={index}
                  sx={{
                    padding: '5px',
                  }}
                >
                  <HouseCard
                    key={index}
                    data={item}
                    handleDelete={deleteHouse}
                  />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Box>
  );
}

export default MyHouses;
