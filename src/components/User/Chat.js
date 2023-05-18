import React, { useState, useEffect } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    // Logic to handle sending the new message
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  useEffect(() => {
    // Logic to fetch and update chat messages in real-time
    // You can use web sockets or other technologies to achieve real-time functionality
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Chat</h2>
      <div style={{ marginBottom: '20px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ background: '#f4f4f4', padding: '10px', marginBottom: '10px' }}>
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 10px' }}>Send</button>
      </form>
    </div>
  );
}

export default Chat;