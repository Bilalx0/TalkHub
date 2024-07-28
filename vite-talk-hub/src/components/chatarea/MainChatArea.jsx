import { useState } from 'react';
import MessageList from './MessageList';
import InputArea from './InputArea';
import './MainChatArea.css';
import UserInfo from './UserInfo';

const MainChatArea = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "I'm thinking of going skiing if the weather's nice", sender: 'Maria', timestamp: '45 minutes ago' },
    { id: 2, text: "Sounds fun! Let me know", sender: 'You', timestamp: '44 minutes ago' },
    // Add more initial messages as needed
  ]);

  const addMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sender: 'You',
      timestamp: 'Just now'
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <>
    <div className="main-chat-area">
    <UserInfo/>
      <MessageList messages={messages} />
      <InputArea onSendMessage={addMessage} />
    </div> 
    </>
  );
};

export default MainChatArea;