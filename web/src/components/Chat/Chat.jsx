import React, { useState } from "react";
import axios from "axios";
import "./../../scss/Chat.scss";

const Chat = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async () => {
    try {
      const token = "";

      await axios.post("/api/messages", {
        token: token,
        receiver: "Odbiorca",
        content: message,
      });

      setMessage("");
    } catch (error) {
      console.error("Błąd podczas wysyłania wiadomości:", error);
    }
  };

  return (
    <div className="chat">
      <div className="chat-user">
        <div className="left-side">
          <img className="avatar" src="/account.png" alt="avatar" />
          <h1>Jan Kowalski</h1>
        </div>
        <div className="right-side">
          <img src="/facetime-button.png" alt="" />
          <img src="telephone.png" alt="" />
        </div>
      </div>
      <div className="messages">{/* tu beda wiadomosci mapowane */}</div>
      <div className="messages">{/* tu beda wiadomosci mapowane */}</div>
      <div className="send-message">
        <img
          className="add-photo"
          src="/upload.png"
          alt=""
          onClick={sendMessage}
        />
        <input
          type="text"
          placeholder="Type a message here"
          value={message}
          onChange={handleMessageChange}
        />
        <button>
          <img className="arrow" src="/send.png" alt="" onClick={sendMessage} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
