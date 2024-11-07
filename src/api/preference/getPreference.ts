import { fetchAPI } from '..';

export const getPreference = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/preferences',
  });
};
