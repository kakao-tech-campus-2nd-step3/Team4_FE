import { useState, useEffect, useCallback } from 'react';
import * as StompJs from '@stomp/stompjs';

export const useChatRoom = (roomId: number) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [stompClient, setStompClient] = useState<StompJs.Client | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const connect = useCallback(() => {
    const client = new StompJs.Client({
      brokerURL: 'ws://localhost:8080/ws-stomp', // WebSocket URL
      reconnectDelay: 5000, // Auto-reconnect after 5 seconds
      onConnect: (frame) => {
        console.log('Connected: ' + frame);
        setIsConnected(true);

        client.subscribe('/sub/topic/room/' + roomId, (message) => {
          const receivedMessage: ChatMessage = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        });
      },
      onWebSocketError: (error) => {
        console.error('WebSocket Error:', error);
      },
      onStompError: (frame) => {
        console.error('STOMP Error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      }
    });

    client.activate();
    setStompClient(client);

    return () => {
      client.deactivate();
      setIsConnected(false);
      console.log('Disconnected');
    };
  }, [roomId]);

  const sendMessage = (messageContent: string, token: string) => {
    if (stompClient && isConnected) {
      const message = {
        roomId,
        content: messageContent,
      };
      stompClient.publish({
        destination: '/pub/chat.sendMessage',
        body: JSON.stringify(message),
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Message sent:', message);
    } else {
      console.error('STOMP client is not connected.');
    }
  };

  return { messages, sendMessage, isConnected, connect };
};
