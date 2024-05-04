import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
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
import { useDispatch } from "react-redux";
import { setAssuranceVec1 } from "../reducers/assurance";

const Titre = ({ text }) => {
  return (
    <Text style={{ fontSize: 28, fontWeight: "bold", color: "#fff" }}>
      {text}
    </Text>
  );
};

const InfoAssuranceSeul = () => {
  const navigation = useNavigation();
  const [assurance, setAssurance] = useState("");
  const [police, setPolice] = useState("");
  const [agence, setAgence] = useState("");
  const [immatriculation, setImmatriculation] = useState("");
  const [marque, setMarque] = useState("");
  const dispatch = useDispatch();
  return (
    <Screen>
      <DynamicHeader num={1} screen="InfoAssurance" />
      <Title text="Informations Sur Assurances et Véhicules" />
      <View style={styles.container}>
        <Titre text="Société d'Assurances" />
        <Label text="Vehicule assuré par" required={true} />
        <Input value={assurance} onChangeText={(a) => setAssurance(a)} />
        <Label text="Police d'Assurance N°" required={true} />
        <Input value={police} onChangeText={(a) => setPolice(a)} />
        <Label text="Agence" required={true} />
        <Input value={agence} onChangeText={(a) => setAgence(a)} />
        <View style={{ marginVertical: 10 }}></View>
        <Titre text="Identité de Véhicule" />
        <Label text="Marque" required={true} />
        <Input value={marque} onChangeText={(i) => setMarque(i)} />
        <Label text="Immatriculation" required={true} />
        <Input
          value={immatriculation}
          onChangeText={(i) => setImmatriculation(i)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("TémoinSeul")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            if (assurance != "" && immatriculation != "") {
              let box = {};
              box["assurance"] = assurance;
              box["immatriculation"] = immatriculation;
              dispatch(setAssuranceVec1(box));
              navigation.navigate("ContratSeul");
            } else {
              Alert.alert(
                "Erreur lors de l'ajout",
                "Vous devez entrer tous les champs obligatoires",
                [{ text: "OK" }],
                { cancelable: false }
              );
            }
          }}
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
    paddingVertical:20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 40,
  },
});

export default InfoAssuranceSeul;
