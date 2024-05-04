import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ value, onChangeText, style }) => {
  return (
    <TextInput
      style={[styles.input, style]}
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
    fontSize: 20,
  },
});

export default Input;
