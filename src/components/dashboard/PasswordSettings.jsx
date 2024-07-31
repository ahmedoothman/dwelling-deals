import React from 'react';
import { changePasswordService } from '../../services/userService';
function PasswordSettings() {
  // changePasswordService(currentPassword,password,passwordConfirm)

  /* 
  response={
    status: "success",
    message: "Password updated successfully"
  }
    or error
    response={
    status: "error",
    message: "Current password is incorrect"
  }
  */
  return <div>PasswordSettings</div>;
}

export default PasswordSettings;
