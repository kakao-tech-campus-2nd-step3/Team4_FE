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

export const ChattingRoomList = ({
  chattingRoom,
}: {
  chattingRoom: ChattingList;
}) => {
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
            <StyledButton>채팅하기</StyledButton>
          </Flex>
        </Card>
      </Wrapper>
  );
};