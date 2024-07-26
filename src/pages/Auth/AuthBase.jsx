import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AuthBase.module.scss';
function AuthBase() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthBase;
