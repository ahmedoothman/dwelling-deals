import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AuthBase.module.scss';
function AuthBase() {
  return (
    <div>
      AuthBase
      <Outlet />
    </div>
  );
}

export default AuthBase;
