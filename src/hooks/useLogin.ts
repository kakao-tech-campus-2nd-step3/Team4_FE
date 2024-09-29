import { LoginData } from '@/types';
import { userLogin } from '@/api/auth/userLogin';
import { trainerLogin } from '@/api/auth/trainerLogin';

export const useLogin = () => {
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
      console.log('로그인 성공:', response);

      // TODO : accessToken 로컬스토리지에 저장
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다.');
    }
  };

  return { handleLogin };
};
