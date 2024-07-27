import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getMeService } from '../../services/userService';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import NavBar from '../../components/dashboard/NavBar';
import LoadingPage from '../LoadingPage';
import Footer from '../../components/dashboard/Footer';
function DashboardBase() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      const response = await getMeService();
      if (response.status === 'error') {
        navigate('/auth');
      }
      if (response.status === 'success') {
        setLoading(false);
        dispatch(authActions.login({ data: { user: response.data } }));
      }
    };
    getUser();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <NavBar />
            <Box
              sx={{
                flex: '1 0 auto',
              }}
            >
              <Outlet />
            </Box>
            <Box
              sx={{
                flexShrink: 0,
              }}
            >
              <Footer />
            </Box>
          </Box>
        </>
      )}
    </div>
  );
}

export default DashboardBase;
