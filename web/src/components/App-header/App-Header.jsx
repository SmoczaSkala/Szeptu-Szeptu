import React from "react";
import "./../../scss/AppHeader.scss";

const AppHeader = () => {
  return (
    <div className="nav-bar">
      <h1 className="name">Szeptu - Szeptu</h1>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <img className="search" src="/search.png" alt="" />
      </a>
      <img className="home" src="/home.png" alt="" />

      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <img className="friends" src="/people.png" alt="" />
      </a>

      <div className="user">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img className="notifications" src="/notification.png" alt="" />
        </a>
        <img className="profile-img" src="/user.png" alt="" />
        <h1 className="username">Jan Kowalski</h1>
      </div>
    </div>
  );
};

export default AppHeader;
