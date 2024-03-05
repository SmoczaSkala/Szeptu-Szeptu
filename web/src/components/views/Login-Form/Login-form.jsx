import React from "react";
import Login from "../../Login/Login";
import RegisterPhoto from "../../FormPhoto/RegisterPhoto";
import "./../../../scss/views-scss/LoginForm.scss";

const LoginForm = () => {
  return (
    <div className="main">
      <div className="left">
        <Login />
      </div>
      <div className="right">
        <RegisterPhoto />
      </div>
    </div>
  );
};

export default LoginForm;