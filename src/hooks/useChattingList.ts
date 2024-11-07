import {useEffect, useState} from "react";
import {ChattingList} from "@/types";
import {getChattingList} from "@/api/chat/getChattingList";

export const useChattingList = () => {
  const [chattingLists, setChattingList] = useState<ChattingList[]>([]);

  useEffect(() => {
    const fetchChattingList = async () => {
      try {
        const data = await getChattingList();
        setChattingList(data);
      } catch (error) {
        console.error(
            '채팅 목록 데이터를 가져오는데 실패했습니다.',
            error
        );
      }
    };
    fetchChattingList();
  }, []);

  return { chattingLists };
}