import {StyledDefaultText, StyledText, Wrapper} from "@/pages/Chat/ChattingList.styles";
import {useChattingList} from "@/hooks/useChattingList";
import {ChattingRoomList} from "@/components/Chat/ChattingRoomList";

export const ChattingList = () => {
  const { chattingLists } = useChattingList();

  return (
      <Wrapper>
        <StyledText>진행중인 채팅 목록입니다.</StyledText>
        {chattingLists.length === 0 ? (
            <StyledDefaultText>
              현재 진행중인 채팅이 없습니다.
            </StyledDefaultText>
        ) : (
            chattingLists.map((chattingList) => (
              <ChattingRoomList chattingList={chattingList} />
          ))
        )}
      </Wrapper>
  );
};