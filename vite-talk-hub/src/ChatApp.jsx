import React, { useState } from 'react';
import './ChatApp.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [activeChat, setActiveChat] = useState(null);

  const contacts = [
    { id: 1, name: 'Maria Nelson', status: 'Grateful for every sunrise and sunset 🌅' },
    { id: 2, name: 'Ashley Harris', status: 'lucky you' },
    { id: 3, name: 'Andrew Wilson', status: 'same here.' },
    // Add more contacts as needed
  ];

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: Date.now(),
        text: inputMessage,
        sender: 'John Smith',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <div className="chat-app">
      <div className="sidebar">
        <div className="user-profile">
          <img src="path_to_john_smith_avatar.jpg" alt="John Smith" />
          <span>John Smith</span>
        </div>
        <div className="contact-list">
          {contacts.map((contact) => (
            <div key={contact.id} className="contact" onClick={() => setActiveChat(contact)}>
              <img src={`path_to_${contact.name.toLowerCase().replace(' ', '_')}_avatar.jpg`} alt={contact.name} />
              <div>
                <span>{contact.name}</span>
                <p>{contact.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="chat-window">
        {activeChat && (
          <>
            <div className="chat-header">
              <img src={`path_to_${activeChat.name.toLowerCase().replace(' ', '_')}_avatar.jpg`} alt={activeChat.name} />
              <span>{activeChat.name}</span>
            </div>
            <div className="message-list">
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.sender === 'John Smith' ? 'sent' : 'received'}`}>
                  <p>{message.text}</p>
                  <span>{message.timestamp}</span>
                </div>
              ))}
            </div>
            <div className="message-input">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type a message"
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatApp;