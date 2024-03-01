import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "", // Zmiana pola "email" na "username"
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const loginFn = async (e) => {
    e.preventDefault();

    // Sprawdź, czy użytkownik podał nazwę użytkownika i hasło
    if (userData.username && userData.password) {
      try {
        // Wysyłaj tylko pole username
        const response = await axios.post("/api/user/login", {
          username: userData.username,
          password: userData.password,
        });
        const data = response.data;

        if (data.success && data.token) {
          sessionStorage.setItem("token", data.token);
          console.log(data);
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
        <h2>Login</h2>
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
