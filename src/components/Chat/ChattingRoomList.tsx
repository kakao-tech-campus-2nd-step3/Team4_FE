import {ChattingList} from "@/types";
import {
  Card,
  Box,
  Flex,
} from '@chakra-ui/react';
import {
  Wrapper,
  StyledCardBody,
  StyledProfileImage,
  StyledNameText,
  StyledLastMessage,
  TextWrapper,
} from './ChattingRoomList.styles';
import {RouterPath} from "@/routes/path";
import {useNavigate} from "react-router-dom";
import { useAuth } from '@/hooks/useAuth';

export const ChattingRoomList = ({
  chattingList,
} : {
  chattingList: ChattingList;
}) => {

  const navigate = useNavigate();
  const authType = useAuth().type === 'user' ? 'USER' : 'TRAINER';
  const sender = authType === chattingList.lastSender;

  const handleCardClick = (roomId: number) => {
    console.log("Navigating to room ID:", roomId);
    navigate(`${RouterPath.chatting}/${roomId}`);
  };


  return (
      <Wrapper onClick={() => handleCardClick(chattingList.id)}>
        <Card>
          <StyledCardBody>
            <StyledProfileImage src={chattingList.memberProfileImageUrl} alt='프로필' />
            <TextWrapper>
              <StyledNameText>
                {chattingList.memberName} {authType === 'USER' ? '트레이너' : '회원님'}
              </StyledNameText>
              <StyledLastMessage isSender={sender}>
                {chattingList.lastMessage}
              </StyledLastMessage>
            </TextWrapper>
          </StyledCardBody>
        </Card>
      </Wrapper>
  )
}