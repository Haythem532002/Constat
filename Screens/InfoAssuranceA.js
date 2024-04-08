import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import VehiculeIndication from "../Components/VehiculeIndication";
import Icon from "react-native-vector-icons/FontAwesome5";
import Label from "../Components/Label";
import Input from "../Components/Input";
const InfoAssuranceA = () => {
  const navigation = useNavigation();
  const [assurance, setAssurance] = useState("");
  const [immatriculation, setImmatriculation] = useState("");
  return (
    <Screen>
      <DynamicHeader num={1} screen="Témoin" />
      <Title text="Assurance et immatriculation " />
      <View style={styles.container}>
        <VehiculeIndication letter="A" />
        <Label text="Assurance" />
        <Input value={assurance} onChangeText={(a) => setAssurance(a)} />
        <View
          style={{
            flexDirection: "row",
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <Icon name="lightbulb" color="#ffffff" size={30} />
          <Text style={{ fontSize: 16, color: "#ffffff", marginLeft: 10 }}>
            Le nom de votre assureur se trouve dans la case 10 de votre carte
            verte
          </Text>
        </View>
        <Label text="Immatriculation" />
        <Input
          value={immatriculation}
          onChangeText={(i) => setImmatriculation(i)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("Témoin")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("InfoAssuranceB")}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 8,
    paddingBottom: 80,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 50,
  },
});

export default InfoAssuranceA;
