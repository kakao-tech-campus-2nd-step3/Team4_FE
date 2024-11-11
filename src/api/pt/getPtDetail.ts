import { fetchAPI } from '..';

export const getUserPtDetail = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/pt/user',
  });
};

export const getTrainerPtDetail = async (ptId: number) => {
  return await fetchAPI({
    method: 'GET',
    endpoint: `/pt/${ptId}/trainer`,
  });
};
