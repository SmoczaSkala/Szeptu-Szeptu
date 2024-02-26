import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import MessageInput from "../MessageInput/MessageInput";
import Contacts from "../contacts/contacts";
import userInfo from "../UserInfo/userInfo";

const ChatApp = () => {
  return (
    <div className="chat-app">
      <AppHeader />
      <div className="app">
        <Contacts />
        <MessageInput />
        <userInfo />
      </div>
    </div>
  );
};

export default ChatApp;
