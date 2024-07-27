import React from 'react';
import HouseCard from './HouseCard';
function TopPremium({ title, data }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {data.map((item, index) => {
          return <HouseCard key={index} data={{}} />;
        })}
      </div>
    </div>
  );
}

export default TopPremium;
