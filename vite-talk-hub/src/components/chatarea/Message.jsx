
import './MainChatArea.css';
const Message = ({ message }) => {
  return (
    <div className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
      <div className="message-content">
        <p>{message.text}</p>
        <span className="timestamp">{message.timestamp}</span>
      </div>
    </div>
  );
};

export default Message;
