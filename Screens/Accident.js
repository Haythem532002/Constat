import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import Label from "../Components/Label";
import Input from "../Components/Input";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";


const Accident = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [lieu, setLieu] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [ville, setVille] = useState("");

  return (
    <Screen>
      <DynamicHeader screen="ChoqBrecap" num={3} />
      <Title text="Indiquer la date, l'heure et le lieu de l'accident." />
      <Label text="Date" />
      <Input value={date} onChangeText={setDate} />
      <Label text="Heure" />
      <Input value={heure} onChangeText={setHeure} />
      <Label text="Lieu (Adresse,Route,etc..)" />
      <Input value={lieu} onChangeText={setLieu} />
      <Label text="Code Postal" />
      <Input value={codePostal} onChangeText={setCodePostal} />
      <Label text="Ville" />
      <Input value={ville} onChangeText={setVille} />
      <Pressable>
        <Text
          style={{
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
          }}
        >
          Me Localiser
        </Text>
      </Pressable>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ChoqB")}
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
});

export default Accident;
