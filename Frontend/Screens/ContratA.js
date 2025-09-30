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
  setAdresseA,
  setIsConA,
  setNomA,
  setNumTelA,
  setPrenomA,
} from "../reducers/assureReducer";
import {
  setAdresseConA,
  setEmailConA,
  setNomConA,
  setPermisConA,
  setPrenomConA,
} from "../reducers/conducteurReducer";

const ContratA = () => {
  const navigation = useNavigation();

  const { nomA, prenomA, numTelA, isConA, adresseA } = useSelector(
    (state) => state.assure
  );
  const { nomConA, prenomConA, permisConA, adresseConA, emailConA } =
    useSelector((state) => state.conducteur);

  const [nomAssure, setNomAssure] = useState(nomA);
  const [prenomAssure, setPrenomAssure] = useState(prenomA);
  const [numeroTelephone, setNumeroTelephone] = useState(numTelA);
  const [adrA, setAdrA] = useState(adresseA);
  const [isAssureConducteur, setIsAssureConducteur] = useState(isConA);
  const [nomConducteur, setNomConducteur] = useState(nomConA);
  const [prenomConducteur, setPrenomConducteur] = useState(prenomConA);
  const [adrC, setAdrC] = useState(adresseConA);
  const [permis, setPermis] = useState(permisConA);
  const [email, setEmail] = useState(emailConA);

  const toggleSwitch = () => setIsAssureConducteur((prev) => !prev);

  const dispatch = useDispatch();

  return (
    <Screen>
      <DynamicHeader num={2} screen="Contrat" />
      <Title text="Informations Sur L'assuré et Conducteur" />
      <VehiculeIndication letter="A" />
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
      <Label text="Permis de conduire N°" required={true} />
      <Input value={permis} type="numeric" onChangeText={(p) => setPermis(p)} />
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
              dispatch(setNomA(nomAssure));
              dispatch(setPrenomA(prenomAssure));
              dispatch(setNumTelA(numeroTelephone));
              dispatch(setAdresseA(adrA));
              dispatch(setPermisConA(permis));
              dispatch(setEmailConA(email));
              if (!isAssureConducteur) {
                dispatch(setIsConA(false));
                if (nomConducteur && prenomConducteur && permis && email) {
                  dispatch(setNomConA(nomConducteur));
                  dispatch(setPrenomConA(prenomConducteur));
                  dispatch(setAdresseConA(adrC));
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
                dispatch(setIsConA(true));
                dispatch(setNomConA(nomAssure));
                dispatch(setPrenomConA(prenomAssure));
                dispatch(setAdresseConA(adrA));
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
