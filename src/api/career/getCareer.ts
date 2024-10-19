import { fetchAPI } from '..';

export const getCareer = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/careers',
  });
};
