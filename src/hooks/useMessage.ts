import { Message } from '@/types';
import { getMessage } from '@/api/chat/getMessage';
import { postMessage } from '@/api/chat/postMessage'; // Add this import
import { useEffect, useState } from 'react';
export const useMessage = (id: string) => {
    const [messages, setMessages] = useState<Message[]>([]);
    
    const handleSendMessage = async (message: Message) => { // Accept a single message
        try {
            await postMessage(message); // Send single message
            setMessages((prevMessages) => [...prevMessages, message]); // Update messages state
        } catch (error) {
            console.error('메세지 전송 실패: ', error);
            alert('메세지 전송에 실패했습니다.');
        }
    };
    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const data = await getMessage(id);
                setMessages(data);
            } catch (error) {
                console.error('이전 메세지를 불러오는데 실패했습니다: ', error);
            }
        };
        fetchMessage();
    }, [id]); // Add id to dependency array
    return { messages, handleSendMessage };
};