import { useNavigate } from "react-router-dom";

import { getChattingRoomId } from "@/api/chat/getChattingRoom";
import { RouterPath } from "@/routes/path";

import { StyledChatButton } from "./ChattingButton.styles";

export const ChattingButton = ({ opponentId }: { opponentId: number }) => {
  const navigate = useNavigate();

  const navigateToChattingRoom = async () => {
    try {
      const response = await getChattingRoomId(opponentId.toString());
      
      navigate(`${RouterPath.chatting}/${response.roomId}`);
    } catch (error) {
      console.error("Error getting chat room ID:", error);
      alert('채팅 방을 불러오는데 실패했습니다.');
    }
  };

  return (
    <StyledChatButton type="button" onClick={navigateToChattingRoom}>
      채팅하기
    </StyledChatButton>
  );
};
