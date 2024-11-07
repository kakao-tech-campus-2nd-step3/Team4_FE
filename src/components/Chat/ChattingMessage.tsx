import {
  Wrapper,
  StyledMessageBody,
  Timestamp,
  AlignWrapper,
} from "@/components/Chat/ChattingMessage.style";
import { useMessage } from '@/hooks/useMessage';
import { useAuth } from '@/hooks/useAuth';
import { Message } from "@/types";

export const ChattingMessage = ({
  id,
  newMessages,
} : {
  id : string;
  newMessages: Message[];
}) => {
  const { messages } = useMessage(id);
  const authType = useAuth().type === 'user' ? 'USER' : 'TRAINER';

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const monthDay = date.toLocaleDateString([], { month: '2-digit', day: '2-digit' });
    const hourMinute = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${monthDay} ${hourMinute}`;
  };

  return (
    <Wrapper>      
      {messages.length === 0 ? null : (
        messages.map((message: Message) => (
          <AlignWrapper isSender={message.sender === authType}>
            <div key={message.roomId}>
              <StyledMessageBody isSender={message.sender === authType}>
                  {message.content}               
                </StyledMessageBody>
              <Timestamp>
                {formatTimestamp(message.date)}
              </Timestamp>
            </div>
          </AlignWrapper>
        ))
      )}
      {newMessages.length === 0 ? null : (
        newMessages.map((message: Message) => (
          <AlignWrapper isSender={message.sender === authType}>
            <div key={message.roomId}>
              <StyledMessageBody isSender={message.sender === authType}>
                  {message.content}               
                </StyledMessageBody>
              <Timestamp>
                {formatTimestamp(message.date)}
              </Timestamp>
            </div>
          </AlignWrapper>
        ))
      )}
    </Wrapper>
  );
};