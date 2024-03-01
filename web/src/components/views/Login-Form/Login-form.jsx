import React from "react";
import Login from "../../Login/Login";
import RegisterPhoto from "../../FormPhoto/RegisterPhoto";

const LoginForm = () => {
  return (
    <div className="main">
      <Login />
      <RegisterPhoto />
      {/* link do rejestracji */}
    </div>
  );
};

export default LoginForm;
