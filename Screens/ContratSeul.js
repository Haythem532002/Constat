import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import VehiculeIndication from "../Components/VehiculeIndication";
import Label from "../Components/Label";
import Input from "../Components/Input";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";

const ContratSeul = () => {
  const navigation = useNavigation();

  const [numeroContrat, setNumeroContrat] = useState("");
  const [nomAssure, setNomAssure] = useState("");
  const [prenomAssure, setPrenomAssure] = useState("");
  const [numeroTelephone, setNumeroTelephone] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [isAssureConducteur, setIsAssureConducteur] = useState(false);
  const [nomConducteur, setNomConducteur] = useState("");
  const [prenomConducteur, setPrenomConducteur] = useState("");
  const [adresseEmail, setAdresseEmail] = useState("");

  const toggleSwitch = () => setIsAssureConducteur((prev) => !prev);

  return (
    <Screen>
      <DynamicHeader num={2} screen="InfoAssuranceSeul" />
      <Title text="Contrats et Conducteurs" />
      <Label text="Numéro de contrat" />
      <Input value={numeroContrat} onChangeText={setNumeroContrat} />
      <Label text="Nom de l'assuré ou raison sociale" />
      <Input value={nomAssure} onChangeText={setNomAssure} />
      <Label text="Prénom de l'assuré" />
      <Input value={prenomAssure} onChangeText={setPrenomAssure} />
      <Label text="Numéro de téléphone" />
      <Input value={numeroTelephone} onChangeText={setNumeroTelephone} />
      <Label text="Code Postal" />
      <Input value={codePostal} onChangeText={setCodePostal} />
      <View
        style={{ alignItems: "center", flexDirection: "row", marginTop: 10 }}
      >
        <Label text="Le conducteur est l'assuré" />
        <Switch
          trackColor={{ false: "#767577", true: "#ffffff" }}
          thumbColor={isAssureConducteur ? "red" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isAssureConducteur}
        />
      </View>
      {!isAssureConducteur && (
        <View>
          <Label text="Nom de conducteur" />
          <Input value={nomConducteur} onChangeText={setNomConducteur} />
          <Label text="Prénom de conducteur" />
          <Input value={prenomConducteur} onChangeText={setPrenomConducteur} />
          <Label text="Adresse E-mail" />
          <Input value={adresseEmail} onChangeText={setAdresseEmail} />
        </View>
      )}
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("InfoAssuranceSeul")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("ChoqSeul")}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
});

export default ContratSeul;
