import React from "react";
import "./../../scss/header.scss";

const AppHeader = () => {
  return (
    <div className="main-page">
      <div className="nav-bar">
        <h1 className="name">Szeptu - Szeptu</h1>
        <a href="">
          <img className="search" src="/search.png" alt="" />
        </a>
        <a href="">
          <img className="friends" src="" alt="" />
        </a>
        <a href="">
          <img className="home" src="" alt="" />
        </a>
        <a href="">
          <img src="notifications" alt="" />
        </a>
        <div className="user">
          <img className="profile-img" src="" alt="" />
          <h1 className="username">Jan Kowalski</h1>
        </div>
      </div>
      <div className="conversations">
        <h1>Konwersacje</h1>
        <input type="text" placeholder="Search here" />
        <div className="chats">
          <h1>Mateusz Kozłowski</h1>
        </div>
        <div className="chat">
          <div className="chat-user">
            <img className="profile" src="" alt="" />
            <h1>Jan Kowalski</h1>
            <h6 className="status">Online</h6>
            <a href="">
              <img className="call" src="" alt="" />
            </a>
          </div>
        </div>
        <div className="user-info">
          <div className="user">
            <img src="" alt="" />
            <h1>Jan Kowalski</h1>
            <h6 className="status">Online</h6>
          </div>
          <div className="user-options">
            <h2>Add to favorite</h2>
            <h2>Block user</h2>
            <h2>View Profile</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
