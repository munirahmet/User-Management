import React, { useState } from 'react';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const sendMessage = async () => {
    if (message.trim() === '') return;

    const newMessage = { user: 'User', text: message };
    setChatLog([...chatLog, newMessage]);

    const botMessage = { user: 'UserGPT', text: "Sorry, I'm unable to respond right now." };
    setChatLog([...chatLog, newMessage, botMessage]);

    setMessage('');
  };

  return (
    <div className="chatbox">
      <h2>UserGPT</h2>
      <div className="chat-log">
        {chatLog.map((entry, index) => (
          <div key={index} className={`chat-message ${entry.user}`}>
            <strong>{entry.user}: </strong>{entry.text}
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;




/*

// If the GPT API quota is not full, UserGPT can be run using this piece of code.

import React, { useState } from 'react';
import axios from 'axios';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const sendMessage = async () => {
    if (message.trim() === '') return;

    const newMessage = { user: 'User', text: message };
    setChatLog([...chatLog, newMessage]);

    try {
      const response = await axios.post('http://localhost:3000/api/chat', { message });
      const botMessage = { user: 'UserGPT', text: response.data.text };
      setChatLog([...chatLog, newMessage, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }

    setMessage('');
  };

  return (
    <div className="chatbox">
      <h2>UserGPT</h2>
      <div className="chat-log">
        {chatLog.map((entry, index) => (
          <div key={index} className={`chat-message ${entry.user}`}>
            <strong>{entry.user}: </strong>{entry.text}
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;
*/
