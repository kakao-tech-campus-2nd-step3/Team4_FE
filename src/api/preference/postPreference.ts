import { Preference } from '@/types';

import { fetchAPI } from '..';

export const postPreference = async (preference: Preference) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: '/preferences',
    body: preference,
  });
};
