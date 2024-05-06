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
import { useDispatch, useSelector } from "react-redux";
import {
  setAdresseB,
  setIsConB,
  setNomB,
  setNumTelB,
  setPrenomB,
} from "../reducers/assureReducer";
import {
  setAdresseConB,
  setEmailConB,
  setNomConB,
  setPermisConB,
  setPrenomConB,
} from "../reducers/conducteurReducer";

const ContratB = () => {
  const navigation = useNavigation();

  const { nomB, prenomB, numTelB, isConB, adresseB } = useSelector(
    (state) => state.assure
  );
  const { nomConB, prenomConB, permisConB, adresseConB, emailConB } =
    useSelector((state) => state.conducteur);

  const [nomAssure, setNomAssure] = useState(nomB);
  const [prenomAssure, setPrenomAssure] = useState(prenomB);
  const [numeroTelephone, setNumeroTelephone] = useState(numTelB);
  const [adrA, setAdrA] = useState(adresseB);
  const [isAssureConducteur, setIsAssureConducteur] = useState(isConB);
  const [nomConducteur, setNomConducteur] = useState(nomConB);
  const [prenomConducteur, setPrenomConducteur] = useState(prenomConB);
  const [adrC, setAdrC] = useState(adresseConB);
  const [permis, setPermis] = useState(permisConB);
  const [email, setEmail] = useState(emailConB);

  const toggleSwitch = () => setIsAssureConducteur((prev) => !prev);

  const dispatch = useDispatch();

  return (
    <Screen>
      <DynamicHeader num={2} screen="Contrat" />
      <Title text="Informations Sur L'assuré et Conducteur" />
      <VehiculeIndication letter="B" />
      <Label text="Nom de l'assuré" required={true} />
      <Input value={nomAssure} onChangeText={(n) => setNomAssure(n)} />
      <Label text="Prénom de l'assuré" required={true} />
      <Input value={prenomAssure} onChangeText={(p) => setPrenomAssure(p)} />
      <Label text="Numéro de téléphone" required={true} />
      <Input
        value={numeroTelephone}
        onChangeText={(n) => setNumeroTelephone(n)}
        type="numeric"
      />
      <Label text="Adresse" />
      <Input value={adrA} onChangeText={(a) => setAdrA(a)} />
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
          <Input
            value={nomConducteur}
            onChangeText={(c) => setNomConducteur(c)}
          />
          <Label text="Prénom de conducteur" required={true} />
          <Input
            value={prenomConducteur}
            onChangeText={(pc) => setPrenomConducteur(pc)}
          />
          <Label text="Adresse" />
          <Input value={adrC} onChangeText={(ac) => setAdrC(ac)} />
        </View>
      )}
      <Label text="Permis de conduire" required={true} />
      <Input value={permis} onChangeText={(p) => setPermis(p)} />
      <Label text="E-mail" required={true} />
      <Input value={email} onChangeText={(e) => setEmail(e)} />
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("Contrat")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            if (nomAssure && prenomAssure && numeroTelephone) {
              dispatch(setNomB(nomAssure));
              dispatch(setPrenomB(prenomAssure));
              dispatch(setNumTelB(numeroTelephone));
              dispatch(setAdresseB(adrA));
              dispatch(setPermisConB(permis));
              dispatch(setEmailConB(email));
              if (!isAssureConducteur) {
                dispatch(setIsConB(false));
                if (nomConducteur && prenomConducteur && permis && email) {
                  dispatch(setNomConB(nomConducteur));
                  dispatch(setPrenomConB(prenomConducteur));
                  dispatch(setAdresseConB(adrC));
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
                dispatch(setIsConB(true));
                dispatch(setNomConB(nomAssure));
                dispatch(setPrenomConB(prenomAssure));
                dispatch(setAdresseConB(adrA));
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

export default ContratB;
