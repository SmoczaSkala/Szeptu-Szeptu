import React from "react";
import "./../../scss/header.scss";

const AppHeader = () => {
  return (
    <div className="navbar">
      <div className="name">
        <h1>Szeptu-Szeptu</h1>
      </div>
      <div className="bar-options">
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
      <div className="user-options">
        <a href="">
          <img src="" alt="" />
        </a>
        <img src="" alt="" />
        <p>Jan Kowalski</p>
      </div>
    </div>
  );
};

export default AppHeader;
