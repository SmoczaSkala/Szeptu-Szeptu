import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./../../scss/Chat.scss";
import ReceivedMessages from "../Messages/ReceivedMessages";
import SentMessages from "../Messages/SentMessages";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [sentMessages, setSentMessages] = useState([]);
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const receivedResponse = await axios.get(
          `/api/messages/received?token=${sessionStorage.getItem("token")}`
        );
        setReceivedMessages(receivedResponse.data.messages);

        const sentResponse = await axios.get(
          `/api/messages/sent?token${sessionStorage.getItem("token")}`
        );
        setSentMessages(sentResponse.data.messages);
      } catch (error) {
        console.error(
          "Błąd podczas pobierania wiadomości:",
          error.response.data
        );
      }
    };

    fetchMessages();
  }, [userId]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      const decodedToken = jwtDecode(token);

      setUserInfo(decodedToken);
    }
  }, []);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async () => {
    try {
      const token = "";

      await axios.post("/api/messages/send", {
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
          {userInfo && <p>{userInfo.name}</p>}
        </div>
        <div className="right-side">
          <img src="/facetime-button.png" alt="" />
          <img src="telephone.png" alt="" />
        </div>
      </div>
      <div className="received-messages">
        <ReceivedMessages messages={receivedMessages} />
      </div>
      <div className="sent-messages">
        <SentMessages messages={sentMessages} />
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
