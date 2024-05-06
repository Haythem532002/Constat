import React from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";

const Screen = ({ children }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      {children}
    </ScrollView>
  );
};
// #151B26
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151B26",
    paddingHorizontal: 13,
    paddingTop: 20,
    color: "#ffffff",
  },
});
export default Screen;
