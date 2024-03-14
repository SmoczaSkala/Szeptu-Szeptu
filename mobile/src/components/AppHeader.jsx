import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const AppHeader = () => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.name}>Szeptu - Szeptu</Text>
      {/* Dodaj ikony i inne elementy interfejsu użytkownika */}
      <View style={styles.user}>
        <Image
          style={styles.notifications}
          source={require("./../../public/notification.png")}
        />
        <Image
          style={styles.profileImg}
          source={require("./../../public/user.png")}
        />
        <Text style={styles.username}>Jan Kowalski</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#242339",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  name: {
    color: "white",
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  notifications: {
    height: 25,
    width: 25,
    marginTop: 3,
    marginRight: 20,
  },
  profileImg: {
    height: 32,
    width: 32,
    marginLeft: 20,
  },
  username: {
    fontSize: 18,
    marginLeft: 7,
    marginTop: 3,
    marginRight: 20,
    color: "#ffffff",
  },
});

export default AppHeader;
