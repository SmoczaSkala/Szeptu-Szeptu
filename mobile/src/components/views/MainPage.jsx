import React from "react";
import { View, StyleSheet } from "react-native";
import AppHeader from "../AppHeader";
import Conversations from "../Conversations";

const MainPage = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <Conversations />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF", // Dostosuj kolor tła do potrzeb
  },
});

export default MainPage;
