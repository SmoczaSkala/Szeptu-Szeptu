import React from "react";
import "../../scss/userInfo.scss";

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="" />
        <h2>User Name</h2>
        <div className="status">
          <p></p>
          <img className="status-icon" src="" />
        </div>
      </div>
      <div className="favorite">
        <img src="" />
        <p>Add to favorite</p>
      </div>
      <div className="block">
        <img src="" />
        <p>Block user</p>
      </div>
      <div className="view-profile">
        <img src="" />
        <p>View Profile</p>
      </div>
    </div>
  );
};

export default UserInfo;
