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
      // Tutaj należy dodać logikę do pobrania tokena użytkownika
      const token = ""; // Pobierz token użytkownika (np. z kontekstu lub stanu)

      // Wysłanie wiadomości do serwera
      await axios.post("/api/messages", {
        token: token,
        receiver: "Odbiorca", // Tutaj należy podać odbiorcę wiadomości
        content: message,
      });

      // Wyczyszczenie pola wprowadzania wiadomości po pomyślnym wysłaniu
      setMessage("");
    } catch (error) {
      console.error("Błąd podczas wysyłania wiadomości:", error);
      // Tutaj możemy dodać obsługę błędu, np. wyświetlić komunikat dla użytkownika
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
      <div className="messages">
        {/* tu beda wiadomosci mapowane */}
      </div>
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
