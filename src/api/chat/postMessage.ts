import {Message} from "@/types";

export const postMessage = async (message: Message) => {
  const token = localStorage.getItem('accessToken');

  const response = await fetch('/pub/chat.sendMessage',  {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
  if(response.status !== 200) {
    throw new Error('메세지 전송 실패');
  }
};

const sendMessage = async () => {
  const message = sendMessage();
  await postMessage([message]);
};