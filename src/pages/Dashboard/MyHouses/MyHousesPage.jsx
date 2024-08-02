import React, { useEffect, useState } from 'react';
import { Alert, Box, Button, Grid } from '@mui/material';
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
import PageHeader from '../../../components/dashboard/PageHeader';
function MyHouses() {
  const [Myhouses, setMyhouses] = useState([]);
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();
  const deleteHouse = (id) => {
    deleteMyHousesService(id);
    dispatch(housesActions.deleteHouse(id));
    setMyhouses((prevhouses) => prevhouses.filter((house) => house._id !== id));
  };

  useEffect(function () {
    async function FetchMyHouses() {
      setPending(true);
      const houses = await getMyHousesService();
      setMyhouses(houses.data);
      setPending(false);
    }
    FetchMyHouses();
  }, []);

  return (
    <Box
      sx={{
        margin: '40px',
      }}
    >
      <PageHeader title={'My Houses'} numberOfResults={Myhouses.length} />

      {Myhouses.length === 0 && !pending && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Alert
            severity='info'
            sx={{
              marginTop: '20px',
            }}
          >
            Your houses list is empty
          </Alert>
        </Box>
      )}
      {pending && (
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
      {Myhouses.length > 0 && !pending && (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '10px',
            }}
          >
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
