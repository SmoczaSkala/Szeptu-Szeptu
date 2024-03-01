import React from "react";
import "./../../scss/UserInfo.scss";

const UserInfo = () => {
  return (
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
  );
};

export default UserInfo;
