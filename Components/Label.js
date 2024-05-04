import React from "react";
import { Text, StyleSheet } from "react-native";

const Label = ({ text, required }) => {
  return (
    <Text style={styles.text}>
      {text}
      {required && <Text> *</Text>} :{" "}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: { color: "#ffffff", fontSize: 22, marginVertical: 15 },
});

export default Label;
