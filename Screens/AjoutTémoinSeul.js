import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Screen from "./Screen";
import Title from "../Components/Title";
import Nav from "../Components/Nav";
import Label from "../Components/Label";
import Input from "../Components/Input";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useDispatch } from "react-redux";
import { setTemoin2 } from "../reducers/choixVehiculeReducer";

const AjoutTémoinSeul = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [num, setNum] = useState("");
  const [adresse, setAdresse] = useState("");
  const [code, setCode] = useState("");
  const [ville, setVille] = useState("");
  const dispatch = useDispatch();

  const validate = () => {
    if (!fullName || !num || !adresse) {
      return false;
    }
    return true;
  };
  return (
    <Screen>
      <Nav screen="TémoinSeul" />
      <Title text="Ajout des témoins (optionnel)" />
      <Label text="Nom et Prénom" required={true} />
      <Input value={fullName} onChangeText={(text) => setFullName(text)} />
      <Label text="Numéro de téléphone" required={true} />
      <Input value={num} onChangeText={(num) => setNum(num)} />
      <Label text="Adresse" required={true} />
      <Input value={adresse} onChangeText={(adresse) => setAdresse(adresse)} />
      <Label text="Code Postal" />
      <Input value={code} onChangeText={(cod) => setCode(cod)} />
      <Label text="Ville" />
      <Input value={ville} onChangeText={(v) => setVille(v)} />
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => {
            navigation.navigate("TémoinSeul");
          }}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            if (validate()) {
              dispatch(setTemoin2({ fullName, num, adresse, code, ville }));
              navigation.navigate("TémoinSeul");
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
    marginVertical: 35,
  },
});

export default AjoutTémoinSeul;
