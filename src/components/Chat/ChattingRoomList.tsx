import {
  Wrapper,
  StyledNameText,
  StyledButton,
} from "./ChattingRoomList.styles";
import {
  Card,
  Box,
  Flex,
} from "@chakra-ui/react";
import {StyledCardBody, StyledProfileImage} from "@/components/Chat/ChattingRoomList.styles";
import {ChattingList} from "@/types";
import {RouterPath} from "@/routes/path";
import {useNavigate} from "react-router-dom";

export const ChattingRoomList = ({
  chattingRoom,
}: {
  chattingRoom: ChattingList;
}) => {
  const navigate = useNavigate();
  const navigateToChattingRoom = () => {
    navigate(RouterPath.chattingRoom);
  };
  return (
      <Wrapper>
        <Card>
          <StyledCardBody>
            <Flex align='center'>
              <StyledProfileImage src={chattingRoom.personProfileImageUrl} alt='프로필' />
              <Box>
                <Flex align='center'>
                  <StyledNameText>{chattingRoom.personName} 트레이너</StyledNameText>
                </Flex>
              </Box>
            </Flex>
          </StyledCardBody>

          <Flex justify='center'>
            <StyledButton type='button' onClick={navigateToChattingRoom}>
              채팅하기
            </StyledButton>
          </Flex>
        </Card>
      </Wrapper>
  );
};