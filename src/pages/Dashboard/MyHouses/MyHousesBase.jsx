import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function MyHousesBase() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.role === 'user') {
      // Redirect to home page
      navigate('/dashboard');
    }
  }, []);
  return (
    <div>
      {/* MyHousesBase */}
      <Outlet />
    </div>
  );
}

export default MyHousesBase;
