import React, { useEffect, useState } from 'react';
import UpdateHouseForm from '../../../components/myhouses/UpdateHouseForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function UpdateHouse() {
  const { id } = useParams();

  const [house, setHouse] = useState(null);
  const { houses } = useSelector((state) => state.houses);

  useEffect(() => {
    const houseLocal = houses.find((house) => house._id === id);
    setHouse(houses.find((house) => house._id === id));
  }, [houses]);

  return <div>{house && <UpdateHouseForm data={house} />}</div>;
}

export default UpdateHouse;
