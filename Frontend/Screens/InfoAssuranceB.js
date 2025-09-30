import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import VehiculeIndication from "../Components/VehiculeIndication";
import Label from "../Components/Label";
import Input from "../Components/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  setAgenceAssurB,
  setPoliceAssurB,
  setVecAssurB,
} from "../reducers/assuranceReducer";
import { setImmatriculationB, setMarqueB } from "../reducers/vehiculeReducer";

const Titre = ({ text }) => {
  return (
    <Text style={{ fontSize: 28, fontWeight: "bold", color: "#fff" }}>
      {text}
    </Text>
  );
};

const InfoAssuranceB = () => {
  const navigation = useNavigation();
  const { vecAssurB, policeAssurB, agenceAssurB } = useSelector(
    (state) => state.assurance
  );
  const { marqueB, immatriculationB } = useSelector((state) => state.vehicule);
  const [assurance, setAssurance] = useState(vecAssurB);
  const [police, setPolice] = useState(policeAssurB);
  const [agence, setAgence] = useState(agenceAssurB);
  const [marque, setMarque] = useState(marqueB);
  const [immatriculation, setImmatriculation] = useState(immatriculationB);
  const dispatch = useDispatch();
  return (
    <Screen>
      <DynamicHeader num={1} screen="InfoAssurance" />
      <Title text="Informations Sur Assurances et Véhicules" />
      <View style={styles.container}>
        <VehiculeIndication letter="B" />
        <Titre text="Société d'Assurances" />
        <Label text="Vehicule assuré par" required={true} />
        <Input value={assurance} onChangeText={(a) => setAssurance(a)} />
        <Label text="Police d'Assurance N°" required={true} />
        <Input
          value={police}
          onChangeText={(a) => setPolice(a)}
          type="numeric"
        />
        <Label text="Agence" required={true} />
        <Input
          value={agence}
          type="numeric"
          onChangeText={(a) => setAgence(a)}
        />
        <View style={{ marginVertical: 10 }}></View>
        <Titre text="Identité de Véhicule" />
        <Label text="Immatriculation" required={true} />
        <Input
          value={immatriculation}
          onChangeText={(i) => setImmatriculation(i)}
        />
        <Label text="Marque" />
        <Input value={marque} onChangeText={(i) => setMarque(i)} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("InfoAssurance")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            if (assurance != "" && immatriculation != "") {
              dispatch(setVecAssurB(assurance));
              dispatch(setImmatriculationB(immatriculation));
              if (police != "") {
                dispatch(setPoliceAssurB(police));
              }
              if (agence != "") {
                dispatch(setAgenceAssurB(agence));
              }
              if (marque != "") {
                dispatch(setMarqueB(marque));
              }
              navigation.navigate("InfoAssurance");
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
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 30,
  },
});

export default InfoAssuranceB;
