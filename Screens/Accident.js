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

const Accident = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [heure, setHeure] = useState(new Date().toLocaleTimeString());
  const [lieu, setLieu] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [ville, setVille] = useState("");

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
      <DynamicHeader screen="ChoqBrecap" num={3} />
      <Title text="Indiquer la date, l'heure et le lieu de l'accident" />
      <Label text="Date" required={true} />
      <Input value={date} style={{ fontSize: 22 }} onChangeText={setDate} />
      <Label text="Heure" required={true} />
      <Input value={heure} onChangeText={setHeure} />
      <Label text="Lieu (Adresse,Route,etc..)" required={true} />
      <Input value={lieu} onChangeText={setLieu} />
      <Label text="Code Postal" />
      <Input value={codePostal} onChangeText={setCodePostal} />
      <Label text="Ville" />
      <Input value={ville} onChangeText={setVille} />
      <Pressable>
        <Text style={styles.button}>Me Localiser</Text>
      </Pressable>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ChoqBrecap")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("ChoixCroquis")}
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
