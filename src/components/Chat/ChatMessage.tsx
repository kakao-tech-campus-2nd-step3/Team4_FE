import {
  MessageWrapper,
  MessageSender,
  MessageContent,
  MessageTimestamp,
} from "@/components/Chat/ChatMessage.style";

// props의 타입 정의
interface ChatMessageProps {
  message: {
    roomId: number;       // 채팅방 ID
    content: string;      // 메시지 내용
    sender: string;       // 보낸 사람
    timestamp?: string;   // 메시지 전송 시간 (선택 사항)
  };
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const { content, timestamp, sender } = message;

  return (
      <MessageWrapper>
        <MessageSender>{sender}</MessageSender>
        <MessageContent>{content}</MessageContent>
        {timestamp && (
            <MessageTimestamp>{new Date(timestamp).toLocaleTimeString()}</MessageTimestamp>
        )}
      </MessageWrapper>
  );
};
