import React from "react";
import Login from "../../Login/Login";
import RegisterPhoto from "../../FormPhoto/RegisterPhoto";

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
