// src/api/postMessage.ts
import { Message } from "@/types"; // Adjust the import path according to your project structure
import { fetchAPI } from '@/api'; // Assuming fetchAPI is in index.ts

export const postMessage = async (message: Message) => {
  return await fetchAPI({
      method: 'POST',
      endpoint: '/pub/chat.sendMessage', // Update with the actual endpoint
      body: message,
    });
};
