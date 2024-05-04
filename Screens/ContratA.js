import React, { useState } from "react";
import { View, StyleSheet, Switch, Alert } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import VehiculeIndication from "../Components/VehiculeIndication";
import Label from "../Components/Label";
import Input from "../Components/Input";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setContratA } from "../reducers/contrat";

const ContratA = () => {
  const navigation = useNavigation();

  const [nomAssure, setNomAssure] = useState("");
  const [prenomAssure, setPrenomAssure] = useState("");
  const [numeroTelephone, setNumeroTelephone] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [isAssureConducteur, setIsAssureConducteur] = useState(false);
  const [nomConducteur, setNomConducteur] = useState("");
  const [prenomConducteur, setPrenomConducteur] = useState("");
  const [permis, setPermis] = useState("");
  const [email, setEmail] = useState("");

  const toggleSwitch = () => setIsAssureConducteur((prev) => !prev);

  const dispatch = useDispatch();
  const obj = {};

  return (
    <Screen>
      <DynamicHeader num={2} screen="Contrat" />
      <Title text="Informations Sur L'assuré et Conducteur" />
      <VehiculeIndication letter="A" />
      <Label text="Nom de l'assuré" required={true} />
      <Input value={nomAssure} onChangeText={setNomAssure} />
      <Label text="Prénom de l'assuré" required={true} />
      <Input value={prenomAssure} onChangeText={setPrenomAssure} />
      <Label text="Numéro de téléphone" required={true} />
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
          <Label text="Nom de conducteur" required={true} />
          <Input value={nomConducteur} onChangeText={setNomConducteur} />
          <Label text="Prénom de conducteur" required={true} />
          <Input value={prenomConducteur} onChangeText={setPrenomConducteur} />
        </View>
      )}
      <Label text="Permis de conduire" required={true} />
      <Input value={permis} onChangeText={setPermis} />
      <Label text="E-mail" required={true} />
      <Input value={email} onChangeText={setEmail} />
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("Contrat")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            if (nomAssure && prenomAssure && numeroTelephone) {
              obj["nomAssure"] = nomAssure;
              obj["prenomAssure"] = prenomAssure;
              obj["numeroTelAssure"] = numeroTelephone;
              obj["codePostal"] = codePostal;
              obj["isAssureConducteur"] = isAssureConducteur;
              if (!isAssureConducteur) {
                if (nomConducteur && prenomConducteur && permis) {
                  obj["nomConducteur"] = nomConducteur;
                  obj["prenomConducteur"] = prenomConducteur;
                  obj["permis"] = permis;
                  dispatch(setContratA(obj));
                  navigation.navigate("Contrat");
                } else {
                  Alert.alert(
                    "Erreur lors de l'ajout",
                    "Vous devez entrer tous les champs obligatoires",
                    [{ text: "OK" }],
                    { cancelable: false }
                  );
                }
              } else {
                obj["nomConducteur"] = nomAssure;
                obj["prenomConducteur"] = prenomAssure;
                dispatch(setContratA(obj));
                navigation.navigate("Contrat");
              }
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
});

export default ContratA;
