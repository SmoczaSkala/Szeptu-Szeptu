import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    city: "",
    dateOfBirth: "",
    acces: false,
    mail: "",
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
        console.log("Użytkownik został dodany pomyślnie:", data.user);
        // Możesz dodać dalsze działania po dodaniu użytkownika, np. przekierowanie do innej strony
      }
    } catch (error) {
      console.error("Błąd podczas dodawania użytkownika:", error);
    }
  };

  return (
    <div className="add-user-form-container">
      <div className="form">
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
          <button type="submit">Dodaj użytkownika</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
