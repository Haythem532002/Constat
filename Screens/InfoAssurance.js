import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Screen from "./Screen";
import Title from "../Components/Title";
import DynamicHeader from "../Components/DynamicHeader";
import BoxAssurance from "../Components/BoxAssurance";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";

const InfoAssurance = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <DynamicHeader num={1} screen="TémoinB" />
      <Title text="Assurances et immatricualations" />
      <BoxAssurance letter="A" />
      <BoxAssurance letter="B" />
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("TémoinB")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("ContratA")}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
});

export default InfoAssurance;
