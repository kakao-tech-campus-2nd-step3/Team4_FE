import { LoginData } from '@/types';

export const userLogin = async ({ email, password }: LoginData) => {
  const response = await fetch('/api/auth/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.status === 200) {
    return response;
  } else {
    throw new Error('로그인 실패');
  }
};
