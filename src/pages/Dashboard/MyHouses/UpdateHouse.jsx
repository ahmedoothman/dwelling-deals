import React, { useEffect, useState } from 'react';
import UpdateHouseForm from '../../../components/myhouses/UpdateHouseForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function UpdateHouse() {
  const { id } = useParams();
  //get data from the redux
  //  const myHouses=useSelector(state=>state.houses.myHouses);

  const [house,setHouse] = useState({});
  const targetHouseToUpdate =  useSelector(state => state.houses.myHouses.find(house => house._id === id));
  
  
  useEffect(() => {
    if (targetHouseToUpdate) {
          setHouse(targetHouseToUpdate)
    }
}, [targetHouseToUpdate]);
   
  

  return (
    <div>
      UpdateHouseFormmmmmm
      <UpdateHouseForm data={house} />
    </div>
  );
}

export default UpdateHouse;
