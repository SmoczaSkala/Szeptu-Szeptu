import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Register = ({ navigation }) => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    city: "",
    dateOfBirth: "",
    mail: "",
    username: "",
    password: "",
  });

  const handleChange = (name, value) => {
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
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.registerForm}>
        <Text style={styles.title}>Szeptu-Szeptu</Text>
        <Text style={styles.subtitle}>Dodaj użytkownika</Text>
        <TextInput
          style={styles.input}
          placeholder="Imię"
          value={userData.name}
          onChangeText={(value) => handleChange("name", value)}
        />
        {/* Dodaj pozostałe pola formularza */}
        <Button title="Zarejestruj się" onPress={handleSubmit} />
        <Button title="Zaloguj się" onPress={handleLoginClick} />
        {/* Dodaj przycisk powrotu do logowania */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#31304f",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  registerForm: {
    backgroundColor: "#31304f",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#242339",
    borderRadius: 20,
    color: "white",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default Register;
