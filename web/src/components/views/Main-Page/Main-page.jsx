import React from "react";
import "./../../../scss/views-scss/MainPage.scss";
import Chat from "../../Chat/Chat";
import UserInfo from "../../User-Info/User-Info";
import Conversations from "../../Conversations/Conversations";
import AppHeader from "../../App-header/App-Header";

const MainPage = () => {
  return (
    <div className="MainPage">
      <AppHeader />
      <div className="content">
        <Conversations />
        <Chat />
        <UserInfo />
      </div>
    </div>
  );
};

export default MainPage;
