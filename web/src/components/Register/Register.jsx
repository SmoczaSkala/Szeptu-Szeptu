import { useState } from "react";
import axios from "axios";
import "./../../scss/Register.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    city: "",
    dateOfBirth: "",
    acces: "false",
    mail: "",
    avatar: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users", userData);
      const data = response.data;

      if (data.success) {
        navigate("/login");
      } else {
        console.error("Registration failed:", data.message);
      }
    } catch (error) {
      console.error("Błąd podczas dodawania użytkownika:", error);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="Register-form">
        <h2>Szeptu-Szeptu</h2>
        <h2>Dodaj użytkownika</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Imię"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Nazwisko"
            name="surname"
            value={userData.surname}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Miasto"
            name="city"
            value={userData.city}
            onChange={handleChange}
          />
          <input
            type="date"
            placeholder="Data urodzenia"
            name="dateOfBirth"
            value={userData.dateOfBirth}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="mail"
            value={userData.mail}
            onChange={handleChange}
          />
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
          <button type="submit">Zarejestruj się</button>
          <button type="submit" onClick={handleLoginClick}>
            Powrót do logowania
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
