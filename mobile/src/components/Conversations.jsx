import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";

const Conversations = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Pobierz dane konwersacji z API
        // ...
        // Ustaw listę użytkowników
        // setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.conversationsTitleInput}>
        <Text style={styles.title}>Konwersacje</Text>
        <TextInput
          style={styles.input}
          placeholder="Wyszukaj konwersacje"
          placeholderTextColor="#ffffff"
        />
      </View>
      <FlatList
        data={users}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.conversation}>
            <View style={styles.conversationInfo}>
              <Text style={styles.username}>{item}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#31304f",
    flex: 1,
    padding: 20,
  },
  conversationsTitleInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#242339",
    borderRadius: 20,
    paddingHorizontal: 10,
    color: "white",
  },
  conversation: {
    backgroundColor: "#242339",
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  conversationInfo: {
    marginLeft: 15,
  },
  username: {
    color: "white",
    fontSize: 18,
  },
});

export default Conversations;
