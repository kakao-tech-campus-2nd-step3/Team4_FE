import { fetchAPI } from '..';

export const getChattingRoomId = async (opponentId: string) => {
  return await fetchAPI({
    method: 'GET',
    endpoint: `/chats/searchRoom/${opponentId}`,
  });
};
