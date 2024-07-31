import React from 'react';
import { updateMeService } from '../../services/userService';
function InfoSettings() {
  // updateMeService(name,email,phoneNumber)
  /* 
  response:

    response = {
    status:'success',
    data: updatedUser
    }

    fails
    response = {
        status:'error',
        message: 'error message'
    }
  */
  return <div>InfoSettings</div>;
}

export default InfoSettings;
