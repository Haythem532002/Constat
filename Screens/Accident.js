import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import Label from "../Components/Label";
import Input from "../Components/Input";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import {
  setDateS,
  setHeureS,
  setLieuS,
  setCodePostalS,
  setVilleS,
} from "../reducers/accidentInfoReducer";

const Accident = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { lieuS, codePostalS, villeS } = useSelector(
    (state) => state.accidentInfo
  );
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [heure, setHeure] = useState(new Date().toLocaleTimeString());
  const [lieu, setLieu] = useState(lieuS);
  const [codePostal, setCodePostal] = useState(codePostalS);
  const [ville, setVille] = useState(villeS);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <Screen>
      <DynamicHeader screen="Circonstance" num={3} />
      <Title text="Indiquer la date, l'heure et le lieu de l'accident" />
      <Label text="Date" required={true} />
      <Input value={date} style={{ fontSize: 22 }} editable={false} />
      <Label text="Heure" required={true} />
      <Input value={heure} editable={false} />
      <Label text="Lieu (Adresse,Route,etc..)" required={true} />
      <Input value={lieu} onChangeText={(l) => setLieu(l)} />
      <Label text="Code Postal" />
      <Input value={codePostal} onChangeText={(c) => setCodePostal(c)} />
      <Label text="Ville" />
      <Input value={ville} onChangeText={(v) => setVille(v)} />
      <Pressable>
        <Text style={styles.button}>Me Localiser</Text>
      </Pressable>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("Circonstance")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            dispatch(setDateS(date));
            dispatch(setHeureS(heure));
            dispatch(setLieuS(lieu));
            dispatch(setCodePostalS(codePostal));
            dispatch(setVilleS(ville));
            navigation.navigate("ChoixCroquis");
          }}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 35,
    fontWeight: "bold",
    paddingVertical: 15,
    color: "#ffffff",
    backgroundColor: "red",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default Accident;
