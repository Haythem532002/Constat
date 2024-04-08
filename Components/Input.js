import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Input = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    color: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
});

export default Input;
