// App.js
import React from 'react';
import LeftSidebar from './components/leftside/ContactList';
import MainChatArea from './components/chatarea/MainChatArea';
import './App.css';


const App = () => {
  return (
    <div className="container">
      <LeftSidebar />
      <MainChatArea />
    </div>
  );
};

export default App;