import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import MessageInput from "../MessageInput/MessageInput";
import Contacts from "../contacts/contacts";
import UserInfo from "../UserInfo/userInfo";
import "../../scss/ChatApp.scss";

const ChatApp = () => {
  return (
    <div className="chat-app">
      <AppHeader />
      <div className="app">
        <Contacts />
        <MessageInput />
        <UserInfo />
      </div>
    </div>
  );
};

export default ChatApp;
