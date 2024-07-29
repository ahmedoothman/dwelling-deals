import React, { useState } from 'react';
import UpdateHouseForm from '../../../components/myhouses/UpdateHouseForm';
function UpdateHouse() {
  // params.id
  //get data from the redux
  // set in state
  const [house, setHouse] = useState({});
  return (
    <div>
      UpdateHouseForm
      <UpdateHouseForm data={house} />
    </div>
  );
}

export default UpdateHouse;
