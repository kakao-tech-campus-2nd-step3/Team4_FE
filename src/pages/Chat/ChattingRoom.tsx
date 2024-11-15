import { Client } from '@stomp/stompjs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import sendChattingImage from '@/assets/sendChatting.png'; // 이미지 경로 import
import { ChattingMessage } from '@/components/Chat/ChattingMessage';
import { useAuth } from '@/hooks/useAuth';
import { Message } from '@/types';

import {
  ChatInput,
  InputWrapper,
  StyledSendImage,
  Wrapper,
} from './ChattingRoom.styles';

export const ChattingRoom = () => {
  const { id } = useParams<{ id: string }>();
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [connected, setConnected] = useState(false);
  const auth = useAuth().type === 'user' ? 'USER' : 'TRAINER';
  const [messageContent, setMessageContent] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const client = new Client({
      brokerURL: 'ws://100.27.210.128:8080/ws-stomp',
      onConnect: (frame) => {
        setConnected(true);
        console.log('Connected: ' + frame);
        client.subscribe(`/sub/topic/room/${id}`, (message) => {
          console.log('Message received: ', message.body);
          showGreeting(JSON.parse(message.body));
        });
      },
      onWebSocketError: (error) => {
        console.error('Error with websocket', error);
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      },
    });

    client.activate();
    setStompClient(client);

    return () => {
      client.deactivate();
      setConnected(false);
    };
  }, [id]);

  const showGreeting = (newMessage: Message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        roomId: newMessage.roomId,
        content: newMessage.content,
        sender: newMessage.sender,
        date: newMessage.date,
      },
    ]);
  };

  const handleSendMessage = () => {
    if (stompClient && stompClient.connected) {
      const updatedMessage = {
        roomId: parseInt(id!, 10),
        content: messageContent,
        sender: auth,
        date: new Date().toISOString(),
      };

      stompClient.publish({
        destination: '/pub/chat.sendMessage',
        body: JSON.stringify(updatedMessage),
      });

      console.log('Sent message: ', updatedMessage);

      setMessageContent('');
    } else {
      console.error('STOMP client is not connected.');
    }
  };

  return (
    <>
      <Wrapper>
        <ChattingMessage id={id!} newMessages={messages} />
      </Wrapper>
      <InputWrapper>
        <ChatInput
          type='text'
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          placeholder='메세지를 입력하세요'
          autoFocus
        />
        <StyledSendImage
          src={sendChattingImage}
          alt='Send'
          onClick={handleSendMessage}
        />
        {!connected && <p>연결 상태를 확인하세요.</p>}
      </InputWrapper>
    </>
  );
};
