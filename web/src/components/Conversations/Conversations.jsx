import React from "react";
import "./../../scss/Conversations.scss";

const Conversations = () => {
  return (
    <div className="conversations">
      <div className="conversations-title-input">
        <h1>Konwersacje</h1>
        <input type="text" placeholder="Wyszukaj konwersacje" />
      </div>
      <div className="conversation-list"></div>
    </div>
  );
};

export default Conversations;
