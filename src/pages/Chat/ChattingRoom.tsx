import { useEffect, useState } from "react";
import { Client } from '@stomp/stompjs';
import { Message } from "@/types";
import { useAuth } from "@/hooks/useAuth";
import { useParams } from "react-router-dom";
import {
  Wrapper,
  InputWrapper,
} from './ChattingRoom.styles';
import { ChattingMessage } from "@/components/Chat/ChattingMessage";

export const ChattingRoom = () => {
  const { id } = useParams<{ id: string }>();
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [connected, setConnected] = useState(false);
  const auth = useAuth().type === 'user' ? 'USER' : 'TRAINER';
  const [messageContent, setMessageContent] = useState("");
  const [messages, setMessages] = useState<Message[]>([]); // Initialize as an empty array
  
  useEffect(() => {
    const client = new Client({
      brokerURL: 'ws://localhost:8080/ws-stomp',
      onConnect: (frame) => {
        setConnected(true);
        console.log('Connected: ' + frame);
        client.subscribe(`/sub/topic/room/${id}`, (message) => {
          console.log("Message received: ", message.body);
          showGreeting(JSON.parse(message.body)); // Append new messages here
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
    // Append new messages to the existing array
    setMessages(prevMessages => [
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
        roomId: parseInt(id!, 10), // Ensure roomId is included
        content: messageContent,
        sender: auth,
        date: new Date().toISOString(), // Use current timestamp
      };

      stompClient.publish({
        destination: '/pub/chat.sendMessage',
        body: JSON.stringify(updatedMessage),
      });

      console.log("Sent message: ", updatedMessage);

      setMessageContent(''); // Clear input field after sending
    } else {
      console.error('STOMP client is not connected.');
    }
  };

  return (
    <>
      <Wrapper>
        <ChattingMessage id={id!} newMessages={messages}/>
      </Wrapper>
      <InputWrapper>
        <input
          type="text"
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          placeholder="메세지를 입력하세요..."
          autoFocus
        />
        <button onClick={handleSendMessage} disabled={!connected}>
          보내기
        </button>
        {!connected && <p>연결 상태를 확인하세요.</p>}
      </InputWrapper>
    </>
  );
};
