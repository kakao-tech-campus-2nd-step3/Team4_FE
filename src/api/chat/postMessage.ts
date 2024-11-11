import { fetchAPI } from '@/api';
import { Message } from '@/types';

export const postMessage = async (message: Message) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: '/pub/chat.sendMessage',
    body: message,
  });
};
