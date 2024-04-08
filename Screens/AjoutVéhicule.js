import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import Screen from "./Screen";
import Title from "../Components/Title";
import Header from "../Components/Header";
import Vehicule from "../Components/Vehicule";
import Label from "../Components/Label";
import Input from "../Components/Input";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const AjoutVéhicule = () => {
  const navigation = useNavigation();
  const [assurance, setAssurance] = useState("");
  const [immatriculation, setImmatriculation] = useState("");
  const [numContrat, setNumContrat] = useState("");
  const [vehicule, setVehicule] = useState("");
  const [checked, setChecked] = useState({
    car: false,
    bike: false,
    truck: false,
  });

  const validate = () => {
    if (!assurance || !immatriculation || !numContrat || !vehicule) {
      Alert.alert(
        "Erreur lors de l'ajout",
        "Tous les champs sont obligatoires pour ajouter une véhicule",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      console.log("Tutu bien");
    }
  };

  return (
    <Screen>
      <Header screen="Info" />
      <Title text="Mes Inforamtions personelles" />
      <View style={styles.container}>
        <Text style={styles.titre}>Sélectionnez le type du véhicule : </Text>
        <ScrollView horizontal={true}>
          <Pressable
            onPress={() => {
              setVehicule("Car");
              setChecked({
                car: true,
                bike: false,
                truck: false,
              });
            }}
          >
            <Vehicule
              text={require("../assets/Car2.png")}
              checked={checked.car}
              w={150}
              h={150}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setVehicule("MotorBike");
              setChecked({
                car: false,
                bike: true,
                truck: false,
              });
            }}
          >
            <Vehicule
              text={require("../assets/Bike13.png")}
              checked={checked.bike}
              w={150}
              h={150}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setVehicule("Truck");
              setChecked({
                car: false,
                bike: false,
                truck: true,
              });
            }}
          >
            <Vehicule
              text={require("../assets/Truck.png")}
              checked={checked.truck}
              w={150}
              h={150}
            />
          </Pressable>
        </ScrollView>
        <Text style={styles.titre}>
          Saisissez les informations du véhicule :{" "}
        </Text>
        <Label text="Assurance" />
        <Input value={assurance} onChangeText={setAssurance} />
        <Label text="Immatriculation" />
        <Input value={immatriculation} onChangeText={setImmatriculation} />
        <Label text="Numéro de contrat" />
        <Input value={numContrat} onChangeText={setNumContrat} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("Info")}
        />
        <ButtonRouge title="Suivant" onPress={validate} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    paddingBottom: 20,
  },
  titre: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 30,
  },
});

export default AjoutVéhicule;
