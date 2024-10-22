// src/api/postMessage.ts
import { Message } from "@/types"; // Adjust the import path according to your project structure
import { fetchAPI } from '@/api'; // Assuming fetchAPI is in index.ts

export const postMessage = async (message: Message) => {
  try {
    await fetchAPI({
      method: 'POST',
      endpoint: '/pub/chat.sendMessage', // Update with the actual endpoint
      body: message,
    });
  } catch (error) {
    // Assert the error type
    if (error instanceof Error) {
      throw new Error('메세지 전송 실패: ' + error.message);
    } else {
      throw new Error('메세지 전송 실패: 알 수 없는 오류 발생');
    }
  }
};

// Function to send a message
const sendMessage = async () => {
  // Assuming you get message details from somewhere, e.g., form input
  const message: Message = {
    roomId: 1,  // Replace with actual roomId
    content: "Hello",  // Replace with actual message content
    sender: "User123",  // Replace with actual sender information
    timestamp: new Date().toISOString(), // Uncomment if you want to include a timestamp
  };

  try {
    const result = await postMessage(message);
    console.log("메세지 전송 성공:", result); // Log success message or further process the result
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
