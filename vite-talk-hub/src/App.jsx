import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import LeftSidebar from './components/leftside/ContactList.jsx';
import MainChatArea from './components/chatarea/MainChatArea';
import './App.css';

const socket = io('http://localhost:5173/'); // Change this to your backend URL when deploying

const App = () => {
  const [username, setUsername] = useState('');
  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    socket.on('userJoined', (user) => {
      setMessages((prevMessages) => [...prevMessages, { text: `${user} joined the chat` }]);
    });

    socket.on('userLeft', (user) => {
      setMessages((prevMessages) => [...prevMessages, { text: `${user} left the chat` }]);
    });

    socket.on('userList', (userList) => {
      setUsers(userList);
    });

    return () => {
      socket.off('message');
      socket.off('userJoined');
      socket.off('userLeft');
      socket.off('userList');
    };
  }, []);

  const joinChat = () => {
    if (username) {
      socket.emit('join', username);
      setJoined(true);
    }
  };

  const sendMessage = (message) => {
    socket.emit('message', message);
  };

  return (
    <div className="container">
      {!joined ? (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
          />
          <button onClick={joinChat}>Join Chat</button>
        </div>
      ) : (
        <>
          <LeftSidebar users={users} />
          <MainChatArea messages={messages} sendMessage={sendMessage} />
        </>
      )}
    </div>
  );
};

export default App;