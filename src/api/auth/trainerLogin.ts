import { LoginData } from '@/types';

import { fetchAPI } from '..';

export const trainerLogin = async ({ email, password }: LoginData) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: '/auth/trainer/login',
    body: { email, password },
  });
};
