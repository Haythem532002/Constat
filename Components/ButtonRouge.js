import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

const ButtonRouge = ({ title,onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 8,
    backgroundColor: "red",
  },
  text: {
    color: "white",
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ButtonRouge;
