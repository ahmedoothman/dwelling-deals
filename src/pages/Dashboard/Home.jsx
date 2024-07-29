import React, { useEffect } from 'react';
import FilterSection from '../../components/dashboard/FilterSection';
import TopPremium from '../../components/dashboard/TopPremium';
import {
  getTopRatedRentHousesService,
  getTopRatedSellHousesService,
} from '../../services/houseService';
import { useDispatch, useSelector } from 'react-redux';
import { housesActions } from '../../store/houses-slice';
import { GridLoader } from 'react-spinners';
import { PRIMARY_COLOR_DARK } from '../../constants/styles/colors';
function Home() {
  // fetch data
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses.houses);
  const RentHouses = useSelector((state) => state.houses.topRatedRentals);
  const Sellhouses = useSelector((state) => state.houses.topRatedBuys);

  useEffect(
    function () {
      async function fetchTopRatedHouses() {
        const rentResult = await getTopRatedRentHousesService();
        dispatch(housesActions.setTopRatedRentals(rentResult.data));
        const sellResult = await getTopRatedSellHousesService();
        dispatch(housesActions.setTopRatedBuys(sellResult.data));
      }

      fetchTopRatedHouses();
    },
    [dispatch]
  );
  // console.log(houses);
  // useEffect( async() => {
  //   const GetTopRent= await getTopRatedRentHousesService();
  //    const GetTopSell=await getTopRatedSellHousesService();
  //    dispatch( housesActions.setTopRatedRentals(GetTopRent.data))
  //    dispatch(housesActions.setTopRatedBuys(GetTopSell.data))

  //   // fetch data for top premium for rent
  //   // fetch data for top premium for
  // }, [dispatch]);

  return (
    <div>
      {/* preview section */}
      <FilterSection />
      {Sellhouses.length > 0 && RentHouses.length > 0 && (
        <>
          <TopPremium title='Top Premium for Rent' data={RentHouses} />
          <TopPremium title='Top Premium for Sale' data={Sellhouses} />
        </>
      )}
      {(Sellhouses.length === 0 || RentHouses.length === 0) && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
          }}
        >
          <GridLoader color={PRIMARY_COLOR_DARK} loading={true} size={20} />
        </div>
      )}
    </div>
  );
}

export default Home;
