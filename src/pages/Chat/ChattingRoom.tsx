import { useEffect, useState } from "react";
import { Client } from '@stomp/stompjs';
import { Message } from "@/types"; // Adjust according to your structure
import { useAuth } from "@/hooks/useAuth";
import { useParams } from 'react-router-dom';

export const ChattingRoom = () => {
  const { roomId } = useParams<{ roomId: string }>(); // Extract roomId from the URL
  const [messageContent, setMessageContent] = useState("");
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const auth = useAuth();

  useEffect(() => {
    if (!roomId) {
      console.error("Room ID is not defined.");
      return; // Exit if roomId is undefined
    }

    const client = new Client({
      brokerURL: 'ws://localhost:8080/ws-stomp',
      onConnect: (frame) => {
        setConnected(true);
        console.log('Connected: ' + frame);
        client.subscribe(`/sub/topic/room/${roomId}`, (message) => {
          console.log("Message received: ", message.body);
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
  }, [roomId]);

  const showGreeting = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message.content]);
  };

  const sendMessage = () => {
    if (stompClient && stompClient.connected) {
      const sender = auth.type === 'user' ? 'USER' : 'TRAINER';

      if (!roomId) return; // Safeguard against undefined roomId

      const message: Message = {
        roomId: parseInt(roomId, 10), // Convert roomId to number safely
        content: messageContent,
        sender: sender,
        timestamp: new Date().toISOString(),
      };

      stompClient.publish({
        destination: '/pub/chat.sendMessage',
        body: JSON.stringify(message),
      });

      console.log("Sent message: ", messageContent);
      setMessageContent(""); // Clear input after sending
    } else {
      console.error('STOMP client is not connected.');
    }
  };

  return (
      <div className="chatting-room">
        <div className="messages">
          {messages.map((msg, index) => (
              <div key={index}>{msg}</div>
          ))}
        </div>
        <div className="message-input">
          <input
              type="text"
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              placeholder="메세지를 입력하세요..."
          />
          <button onClick={sendMessage}>보내기</button>
        </div>
      </div>
  );
};
