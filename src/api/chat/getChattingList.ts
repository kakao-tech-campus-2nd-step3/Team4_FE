import { fetchAPI } from "..";

export const getChattingList = async () => {
  return await fetchAPI( {
    method: 'GET',
    endpoint: '/chats',
  });
};