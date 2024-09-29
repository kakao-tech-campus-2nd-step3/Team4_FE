import { LoginData } from '@/types';

export const trainerLogin = async ({ email, password }: LoginData) => {
  const response = await fetch('/api/auth/trainer/login', {
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
