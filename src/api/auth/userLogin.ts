import { LoginData } from '@/types';

import { fetchAPI } from '..';

export const userLogin = async ({ email, password }: LoginData) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: '/auth/user/login',
    body: { email, password },
  });
};
