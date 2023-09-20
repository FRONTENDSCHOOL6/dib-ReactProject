import useStorage from '@/hooks/useStorage';
import { useAuth } from './AuthContext';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function PrivateRoute() {
  const { isAuth } = useAuth();
  const { storageData } = useStorage('pocketbase_auth');

  return isAuth || storageData ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      {...toast.error('로그인 후 이용가능하세요', {
        position: 'top-center',
        duration: 3000,
        icon: '🙏🏻',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      })}
    />
  );
}

export default PrivateRoute;
