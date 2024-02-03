import React, { useState } from 'react';

const MessageInput = () => {
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    console.log(`Wysłano nową wiadomość: ${newMessage}`);
    //logika wysyłania wiadomosci do serwera
    setNewMessage('');
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Napisz wiadomość..."
        value={newMessage}
        onChange={handleInputChange}
      />
      <button onClick={handleSendMessage}>Wyślij</button>
    </div>
  );
};

export default MessageInput; 
