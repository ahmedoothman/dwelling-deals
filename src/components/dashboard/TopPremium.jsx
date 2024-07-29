import React from 'react';
import HouseCard from './HouseCard';
import { Stack } from '@mui/material';
function TopPremium({ title, data }) {

  // const obj={
  //   bedrooms: 5,
  //   bathrooms: 4,
  //   area: 487,
  //   imageUrl: "https://loremflickr.com/600/500/realtor",
  //   price: 719,
  //   title: "pauper voveo deficio",
  //   _id: "66a537c1c2e29a5440b7303d"
  // }
  return (
    <div>
      <h2>{title}</h2>
      <Stack flexDirection={"row"}>
        {data.map((item, index) => {
          return <HouseCard key={index} data={item} />;
        })}
      </Stack>
      
    </div>
  );
}

export default TopPremium;
