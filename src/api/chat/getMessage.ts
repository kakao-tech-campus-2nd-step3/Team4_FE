import { fetchAPI } from '..';

export const getMessage = async (roomId: string) => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/chats/' + roomId,
  });
};