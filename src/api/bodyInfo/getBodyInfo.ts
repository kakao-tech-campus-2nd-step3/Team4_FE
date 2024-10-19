import { fetchAPI } from '..';

export const getBodyInfo = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/bodyInfos',
  });
};
