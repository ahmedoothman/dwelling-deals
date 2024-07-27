import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getMeService } from '../../services/userService';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import LoadingPage from '../LoadingPage';
function AuthBase() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      const response = await getMeService();
      if (response.status === 'success') {
        navigate('/dashboard');
        dispatch(authActions.login({ data: { user: response.data } }));
      }
      setLoading(false);
    };
    getUser();
  }, []);
  return <div>{loading ? <LoadingPage /> : <Outlet />}</div>;
}

export default AuthBase;
