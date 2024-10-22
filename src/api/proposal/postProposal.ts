import { Proposal } from '@/types';

import { fetchAPI } from '..';

export const postProposal = async (proposal: Proposal) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: '/pt',
    body: proposal,
  });
};
