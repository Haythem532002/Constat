import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import Label from "../Components/Label";
import Input from "../Components/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  setAgence,
  setImmatVehicule,
  setMarqueVehicule,
  setPolice,
  setVehiculeAssure,
} from "../reducers/constatSeulReducer";

const Titre = ({ text }) => {
  return (
    <Text style={{ fontSize: 28, fontWeight: "bold", color: "#fff" }}>
      {text}
    </Text>
  );
};

const InfoAssuranceSeul = () => {
  const navigation = useNavigation();
  const { marque, police, vehiculeAssure, agence, immatVehicule } = useSelector(
    (state) => state.constatSeul
  );
  const [assurance, setAssurance] = useState(vehiculeAssure);
  const [policeI, setPoliceI] = useState(police);
  const [agenceI, setAgenceI] = useState(agence);
  const [immatriculationI, setImmatriculation] = useState(immatVehicule);
  const [marqueI, setMarque] = useState(marque);
  const dispatch = useDispatch();
  return (
    <Screen>
      <DynamicHeader num={1} screen="TémoinSeul" />
      <Title text="Informations Sur Assurances et Véhicules" />
      <View style={styles.container}>
        <Titre text="Société d'Assurances" />
        <Label text="Vehicule assuré par" required={true} />
        <Input value={assurance} onChangeText={(a) => setAssurance(a)} />
        <Label text="Police d'Assurance N°" required={true} />
        <Input
          value={policeI}
          type="numeric"
          onChangeText={(a) => setPoliceI(a)}
        />
        <Label text="Agence" required={true} />
        <Input
          value={agenceI}
          type="numeric"
          onChangeText={(a) => setAgenceI(a)}
        />
        <View style={{ marginVertical: 10 }}></View>
        <Titre text="Identité de Véhicule" />
        <Label text="Immatriculation" required={true} />
        <Input
          value={immatriculationI}
          onChangeText={(i) => setImmatriculation(i)}
        />
        <Label text="Marque" />
        <Input value={marqueI} onChangeText={(i) => setMarque(i)} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("TémoinSeul")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            if (assurance != "" && immatriculationI != "" && policeI != "") {
              dispatch(setImmatVehicule(immatriculationI));
              dispatch(setVehiculeAssure(assurance));
              dispatch(setPolice(policeI));
              dispatch(setMarqueVehicule(marqueI));
              dispatch(setAgence(agenceI));
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
    paddingVertical: 20,
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
