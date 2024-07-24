import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './DashboardBase.module.scss';
function DashboardBase() {
  return (
    <div>
      DashboardBase
      <Outlet />
    </div>
  );
}

export default DashboardBase;
