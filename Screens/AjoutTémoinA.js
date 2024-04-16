import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "./Screen";
import Title from "../Components/Title";
import Nav from "../Components/Nav";
import Label from "../Components/Label";
import Input from "../Components/Input";
import { useNavigation } from "@react-navigation/native";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";

const AjoutTémoinA = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [num, setNum] = useState("");
  const [adresse, setAdresse] = useState("");
  const [code, setCode] = useState("");
  const [ville, setVille] = useState("");
  return (
    <Screen>
      <Nav screen="ChoixVehiculeA" />
      <Title text="Ajout des témoins (optionnel)" />
      <Label text="Nom et Prénom" />
      <Input value={fullName} onChangeText={(text) => setFullName(text)} />
      <Label text="Numéro de téléphone" />
      <Input value={num} onChangeText={(num) => setNum(num)} />
      <Label text="Adresse" />
      <Input value={adresse} onChangeText={() => setAdresse(adresse)} />
      <Label text="Code Postal" />
      <Input value={code} onChangeText={(cod) => setCode(cod)} />
      <Label text="Ville" />
      <Input value={ville} onChangeText={(v) => setVille(v)} />
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("Témoin")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("Témoin")}
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
    marginVertical: 35,
  },
});

export default AjoutTémoinA;
