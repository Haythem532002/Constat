import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonRouge from "./ButtonRouge";
import ButtonBlanc from "./ButtonBlanc";

const Buttons = ({ title }) => {
  return (
    <View style={styles.buttonContainer}>
      <ButtonBlanc title="Précedent" />
      <ButtonRouge title="Suivant" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 30,
  },
});

export default Buttons;
