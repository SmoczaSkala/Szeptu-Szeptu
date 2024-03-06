import React from "react";
import Register from "../../Register/Register";
import RegisterPhoto from "../../FormPhoto/RegisterPhoto";

const RegisterForm = () => {
  return (
    <div className="main">
      <div className="left">
        <Register />
      </div>
      <div className="right">
        <RegisterPhoto />
      </div>
    </div>
  );
};

export default RegisterForm;
