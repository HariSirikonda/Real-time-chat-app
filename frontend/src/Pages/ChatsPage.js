import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ChatsPage() {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const { data } = await axios.get("/api/chat");
      setChats(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      ChatsPage
    </div>
  );
}

export default ChatsPage;
