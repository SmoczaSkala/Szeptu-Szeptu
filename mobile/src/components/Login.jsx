import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const Login = ({ navigation }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/user/login", userData);
      const data = response.data;

      if (data.success && data.token) {
      }
    } catch (error) {
      console.error("Błąd logowania:", error);
    }
  };

  const handleRegisterClick = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Szeptu - Szeptu</Text>
      <TextInput
        style={styles.input}
        placeholder="Nazwa użytkownika"
        value={userData.username}
        onChangeText={(value) => handleChange("username", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Hasło"
        secureTextEntry={true}
        value={userData.password}
        onChangeText={(value) => handleChange("password", value)}
      />
      <Button title="Zaloguj" onPress={handleSubmit} color="#242339" />
      <Text style={styles.registerText}>
        Nie masz jeszcze konta?{" "}
        <Text style={styles.registerLink} onPress={handleRegisterClick}>
          Zarejestruj się
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31304f",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffffff",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  registerText: {
    marginTop: 20,
    color: "#ffffff",
  },
  registerLink: {
    color: "#ffffff",
    textDecorationLine: "underline",
  },
});

export default Login;
