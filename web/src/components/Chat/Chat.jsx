import React from "react";
import "./../../scss/Chat.scss";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-user">
        <div className="profile">
          <div className="left-side">
            <img className="avatar" src="/account.png" alt="avatar" />
            <h1>Jan Kowalski</h1>
          </div>
          <div className="right-side">
            <img src="/facetime-button.png" alt="" />
            <img src="telephone.png" alt="" />
          </div>
        </div>

      </div>
      <div className="send-message">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img className="add-photo" src="/upload.png" alt="" />
        </a>
        <input type="text" placeholder="Type a message here" />
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img className="arrow" src="/send.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Chat;
