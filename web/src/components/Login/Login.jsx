import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./../../scss/Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [logoutAfterSession, setLogoutAfterSession] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleLogoutAfterSessionChange = (e) => {
    setLogoutAfterSession(e.target.checked);
  };

  const loginFn = async (e) => {
    e.preventDefault();

    if (userData.username && userData.password) {
      try {
        const response = await axios.post("/api/user/login", {
          username: userData.username,
          password: userData.password,
        });
        const data = response.data;

        if (data.success && data.token) {
          if (logoutAfterSession) {
            localStorage.setItem("token", data.token);
          } else {
            sessionStorage.setItem("token", data.token);
          }
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="form">
        <h2>Szeptu - Szeptu</h2>
        <form onSubmit={loginFn}>
          <input
            type="text"
            placeholder="Nazwa użytkownika"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Hasło"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="logoutAfterSession"
              checked={logoutAfterSession}
              onChange={handleLogoutAfterSessionChange}
            />
            <label htmlFor="logoutAfterSession">
              Wyloguj mnie po tej sesji
            </label>
          </div>
          <button type="submit">Zaloguj</button>
          <h4>
            Po poprawnym zalogowaniu zostaniesz przekierowany na stronę główną.
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
