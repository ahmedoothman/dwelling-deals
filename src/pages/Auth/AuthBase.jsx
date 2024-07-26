import React from 'react';
import { Outlet } from 'react-router-dom';
function AuthBase() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthBase;
