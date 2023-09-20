import useStorage from '@/hooks/useStorage';
import { useAuth } from './AuthContext';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function PrivateRoute() {
  const { isAuth } = useAuth();
  const { storageData } = useStorage('pocketbase_auth');

  return isAuth || storageData ? (
    <Outlet />
  ) : (
    <Navigate to="/login" {...alert('로그인 후 이용가능합니다.')} />
  );
}

export default PrivateRoute;
