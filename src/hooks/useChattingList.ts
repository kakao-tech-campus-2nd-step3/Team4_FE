import {useEffect, useState} from "react";
import {getChattingList} from "@/api/chat/getChattingList";
import {ChattingList} from "@/types";

export const useChattingList = () => {
  const [chattings, setChatting] = useState<ChattingList[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const data = await getChattingList();
        setChatting(data);
      } catch (error) {
        console.error('채팅 목록을 불러오는데 실패했습니다.', error);
      }
    };
    fetchChats();
  }, []);
  return { chattings };
};