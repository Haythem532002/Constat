import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, Picker } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import VehiculeIndication from "../Components/VehiculeIndication";
import Label from "../Components/Label";
import Input from "../Components/Input";
import { Dropdown } from "react-native-element-dropdown";
import RNPickerSelect from "react-native-picker-select";

import { useDispatch, useSelector } from "react-redux";
import {
  setAgenceAssurA,
  setPoliceAssurA,
  setVecAssurA,
} from "../reducers/assuranceReducer";
import { setImmatriculationA, setMarqueA } from "../reducers/vehiculeReducer";

const Titre = ({ text }) => {
  return (
    <Text style={{ fontSize: 28, fontWeight: "bold", color: "#fff" }}>
      {text}
    </Text>
  );
};

const InfoAssuranceA = () => {
  const navigation = useNavigation();
  const { vecAssurA, policeAssurA, agenceAssurA } = useSelector(
    (state) => state.assurance
  );
  const { marqueA, immatriculationA } = useSelector((state) => state.vehicule);
  const [assurance, setAssurance] = useState(vecAssurA);
  const [police, setPolice] = useState(policeAssurA);
  const [agence, setAgence] = useState(agenceAssurA);
  const [marque, setMarque] = useState(marqueA);
  const [immatriculation, setImmatriculation] = useState(immatriculationA);
  const dispatch = useDispatch();
  return (
    <Screen>
      <DynamicHeader num={1} screen="InfoAssurance" />
      <Title text="Informations Sur Assurances et Véhicules" />
      <View style={styles.container}>
        <VehiculeIndication letter="A" />
        <Titre text="Société d'Assurances" />
        <Label text="Vehicule assuré par" required={true} />
        {/* <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          placeholder={{}}
          items={[
            { label: "GAT Assurance", value: "football" },
            { label: "AMI Assurance", value: "baseball" },
            { label: "Lloyd Assurance", value: "hockey" },
          ]}
        /> */}
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
              dispatch(setVecAssurA(assurance));
              dispatch(setImmatriculationA(immatriculation));
              if (police != "") {
                dispatch(setPoliceAssurA(police));
              }
              if (agence != "") {
                dispatch(setAgenceAssurA(agence));
              }
              if (marque != "") {
                dispatch(setMarqueA(marque));
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

export default InfoAssuranceA;
