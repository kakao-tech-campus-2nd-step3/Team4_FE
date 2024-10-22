import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ChattingList} from "@/types";
import {RouterPath} from "@/routes/path"; // Adjust according to your structure

export const ChattingRoomList: React.FC = () => {
  const [chatRooms, setChatRooms] = useState<ChattingList[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const token = localStorage.getItem('accessToken'); // Retrieve the token from local storage
        const response = await fetch('/api/chats', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Set the Authorization header with the token
            'Content-Type': 'application/json', // Ensure correct content type
          },
        });

        // Check if the response is ok
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Failed to fetch chat rooms:', errorText);
          throw new Error('Failed to fetch chat rooms');
        }

        const data: ChattingList[] = await response.json();

        // Check the type of data
        console.log('Fetched chat rooms:', data);
        if (Array.isArray(data)) {
          setChatRooms(data);
        } else {
          console.error('Fetched data is not an array:', data);
          setChatRooms([]); // Set to empty array if not an array
        }
      } catch (error) {
        console.error('Error fetching chat rooms:', error);
        setChatRooms([]); // Handle error gracefully
      }
    };

    fetchChatRooms();
  }, []);

  const handleCardClick = (roomId: number) => {
    console.log("Navigating to room ID:", roomId); // Check the roomId being passed
    navigate(`${RouterPath.chattingRoom}/${roomId}`);
  };

  return (
      <div>
        {Array.isArray(chatRooms) && chatRooms.length > 0 ? (
            chatRooms.map((room) => (
                <div onClick={() => handleCardClick(room.Id)}>
                  <h3>{room.personName}</h3> {/* Display person's name */}
                  <img src={room.personProfileImageUrl} alt={`${room.personName}'s profile`}
                       width={50} height={50}/> {/* Display profile image */}
                </div>
            ))
        ) : (
            <p>No chat rooms available.</p> // Provide feedback when no rooms are found
        )}
      </div>
  );
};
