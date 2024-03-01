import React from "react";
import "./../../scss/Chat.scss";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-user">
        <img className="profile" src="" alt="" />
        <h1>Jan Kowalski</h1>
        <h6 className="status">Online</h6>
        <a href="">
          <img className="call" src="" alt="" />
        </a>
      </div>
      <div className="send-message">
        <a href="">
          <img className="add-photo" src="" alt="" />
        </a>
        <input type="text" placeholder="Type a message here" />
        <a href="">
          <img className="arrow" src="" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Chat;
