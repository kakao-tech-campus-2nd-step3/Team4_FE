import { fetchAPI } from '..';

export const getTrainerProfile = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/trainers/profile',
  });
};
