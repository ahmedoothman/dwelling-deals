import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './DashboardBase.module.scss';
function DashboardBase() {
  // to do : check auth
  return (
    <div>
      DashboardBase
      <Outlet />
    </div>
  );
}

export default DashboardBase;
