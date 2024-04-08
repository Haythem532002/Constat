import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Label = ({ text }) => {
  return <Text style={styles.text}>{text}* : </Text>;
};

const styles = StyleSheet.create({
  text: { color: "#ffffff", fontSize: 22, marginVertical: 15 },
});

export default Label;
