import React from "react";
import Login from "../../Login/Login";
import RegisterPhoto from "../../FormPhoto/RegisterPhoto";
import "./../../../scss/views-scss/LoginForm.scss";
import { useAuth } from "../../../AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const token = useAuth();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

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
