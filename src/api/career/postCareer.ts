import { Career } from '@/types';

import { fetchAPI } from '..';

export const postCareer = async (careers: Career[]) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: '/careers',
    body: careers,
  });
};
