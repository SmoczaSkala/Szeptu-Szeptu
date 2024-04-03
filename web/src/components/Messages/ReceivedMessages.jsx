import React, { useState, useEffect } from "react";
import axios from "axios";

const ReceivedMessages = ({ userId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `/users/messages/received?token=${sessionStorage.getItem("token")}`
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
};

export default ReceivedMessages;
