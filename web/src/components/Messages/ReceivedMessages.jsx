import React, { useState, useEffect } from "react";
import axios from "axios";

const ReceivedMessages = ({ userId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `/api/messages/received?token=${sessionStorage.getItem("token")}`
        );
        setMessages(response.data.messages);
      } catch (error) {
        console.error(
          "Błąd podczas pobierania wiadomości:",
          error.response.data
        );
      }
    };

    if (true || userId) {
      fetchMessages();
    }
  }, [userId]);

  return (
    <div>
      <ul>
        {messages.map((message) => {
          return (
            <li key={message._id}>
              <strong>Od:</strong> {message.receiver}, <strong>Data:</strong>{" "}
              {message.sentAt}
              <br />
              {message.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReceivedMessages;
