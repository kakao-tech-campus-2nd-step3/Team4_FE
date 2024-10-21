import { ChattingRoomList } from "@/components/Chat/ChattingRoomList";
import {useChattingList} from "@/hooks/useChattingList";
import { Wrapper, StyledDefaultText, StyledTitleText, TitleWrapper} from "./ChattingList.styles";

export const ChattingList = () => {
  const { chattings } = useChattingList();

  return (
      <Wrapper>
        <TitleWrapper>
          <StyledTitleText>
            진행중인 채팅 목록입니다.
          </StyledTitleText>
        </TitleWrapper>
        {chattings.length === 0 ? (
            <StyledDefaultText>
              진행중인 채팅이 없습니다.
            </StyledDefaultText>
        ) : (
            chattings.map((chatting) => (
                <ChattingRoomList chattingRoom={chatting} />
            ))
        )}
      </Wrapper>
  );
};