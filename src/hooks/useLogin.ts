import { useNavigate } from 'react-router-dom';

import { trainerLogin } from '@/api/auth/trainerLogin';
import { userLogin } from '@/api/auth/userLogin';
import { RouterPath } from '@/routes/path';
import { LoginData } from '@/types';

import { useAuth } from './useAuth';

export const useLogin = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (
    loginData: LoginData,
    loginType: 'user' | 'trainer'
  ) => {
    let response;

    try {
      switch (loginType) {
        case 'user':
          response = await userLogin(loginData);
          break;
        case 'trainer':
          response = await trainerLogin(loginData);
          break;
      }

      alert('로그인에 성공했습니다.');

      const { token } = await response;
      localStorage.setItem('accessToken', token);
      localStorage.setItem('type', loginType);

      setAuth({ isAuthenticated: true, type: loginType });

      navigate(RouterPath.home);
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다.');
    }
  };

  return { handleLogin };
};
