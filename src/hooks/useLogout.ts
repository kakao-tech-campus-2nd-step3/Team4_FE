import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import { RouterPath } from '@/routes/path';

export const useLogout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({ isAuthenticated: false, type: null });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('type');
    navigate(RouterPath.login);
  };

  return { handleLogout };
};
