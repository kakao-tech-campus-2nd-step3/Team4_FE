import { fetchAPI } from '..';

export const getUserProfile = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/users/profile',
  });
};
