import {fetchAPI} from "@/api";

export const getChattingList = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/chats',
  })
}