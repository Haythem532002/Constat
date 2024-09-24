import React, { useState } from "react";
import { View, StyleSheet, Switch, Alert } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import Label from "../Components/Label";
import Input from "../Components/Input";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  setAdresseAssure,
  setAdresseCon,
  setEmailCon,
  setIsCon,
  setNomAssure,
  setNomCon,
  setNumTelAssure,
  setPermisCon,
  setPrenomAssure,
  setPrenomCon,
} from "../reducers/constatSeulReducer";

const ContratSeul = () => {
  const navigation = useNavigation();
  const {
    nomAssure,
    prenomAssure,
    adresseAssure,
    numTelAssure,
    isCon,
    nomCon,
    prenomCon,
    adresseCon,
    permisCon,
    emailCon,
  } = useSelector((state) => state.constatSeul);

  const [nom, setNomAssur] = useState(nomAssure);
  const [prenom, setPrenomAssur] = useState(prenomAssure);
  const [numeroTelephone, setNumeroTelephone] = useState(numTelAssure);
  const [adrA, setAdrA] = useState(adresseAssure);
  const [isAssureConducteur, setIsAssureConducteur] = useState(isCon);
  const [nomConducteur, setNomConducteur] = useState(nomCon);
  const [prenomConducteur, setPrenomConducteur] = useState(prenomCon);
  const [adrC, setAdrC] = useState(adresseCon);
  const [permis, setPermis] = useState(permisCon);
  const [email, setEmail] = useState(emailCon);

  const toggleSwitch = () => setIsAssureConducteur((prev) => !prev);

  const dispatch = useDispatch();

  return (
    <Screen>
      <DynamicHeader num={2} screen="InfoAssuranceSeul" />
      <Title text="Informations Sur L'assuré et Conducteur" />
      <Label text="Nom de l'assuré" required={true} />
      <Input value={nom} onChangeText={(n) => setNomAssur(n)} />
      <Label text="Prénom de l'assuré" required={true} />
      <Input value={prenom} onChangeText={(p) => setPrenomAssur(p)} />
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
      <Label text="Permis de conduire N°" type="numeric" required={true} />
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
            if (nom && prenom && numeroTelephone) {
              dispatch(setNomAssure(nom));
              dispatch(setPrenomAssure(prenom));
              dispatch(setNumTelAssure(numeroTelephone));
              dispatch(setAdresseAssure(adrA));
              dispatch(setPermisCon(permis));
              dispatch(setEmailCon(email));
              if (!isAssureConducteur) {
                dispatch(setIsCon(false));
                if (nomConducteur && prenomConducteur && permis && email) {
                  dispatch(setNomCon(nomConducteur));
                  dispatch(setPrenomCon(prenomConducteur));
                  dispatch(setAdresseCon(adrC));
                  navigation.navigate("ChoqSeul");
                } else {
                  Alert.alert(
                    "Erreur lors de l'ajout",
                    "Vous devez entrer tous les champs obligatoires",
                    [{ text: "OK" }],
                    { cancelable: false }
                  );
                }
              } else {
                dispatch(setIsCon(true));
                dispatch(setNomCon(nom));
                dispatch(setPrenomCon(prenom));
                dispatch(setAdresseCon(adrA));
                navigation.navigate("ChoqSeul");
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

export default ContratSeul;
