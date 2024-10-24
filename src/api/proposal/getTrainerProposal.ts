import { fetchAPI } from '..';

export const getTrainerProposal = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/pt/suggests/trainer',
  });
};
