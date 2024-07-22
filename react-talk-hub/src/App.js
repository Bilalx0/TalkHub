import React, { useState } from 'react';
import './style.css';

function App() {
  const [messages, setMessages] = useState([{ text: "Hello! Let's Chat", received: true }]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, received: false }]);
      setInputMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">TalkHub</div>
      <div className="chat-messages" id="chatMessages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.received ? 'received' : ''}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          id="messageInput"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>→</button>
      </div>
    </div>
  );
}

export default App;