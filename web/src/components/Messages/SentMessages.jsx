import React, { useState, useEffect } from "react";
import axios from "axios";

const SentMessages = ({ userId }) => {
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `/api/messegaes/sent?token=${sessionStorage.getItem("token")}`
        );
        setmessages(response.data.messages);
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
              <strong>Do:</strong> {message.sender}, <strong>Data:</strong>{" "}
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

export default SentMessages;
