import React from "react";
import "./../../scss/UserInfo.scss";

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="user">
        <img src="" alt="nigga" />
        <h1>Jan Kowalski</h1>
      </div>
      <div className="user-options">
        <div className="favorite">
          <img src="/favorite.png" alt="" />
          <h2>Add to favorite</h2>
        </div>
        <div className="block">
          <img src="/blocked.png" alt="" />
          <h2>Block user</h2>
        </div>
        <div className="view-profile">
          <img src="/account.png" alt="" />
          <h2>View Profile</h2>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
