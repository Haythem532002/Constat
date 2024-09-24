import React, { useState, useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { ajout } from "../reducers/infoReducer";
const AjoutVéhicule = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [marque, setMarque] = useState("");
  const [immatriculation, setImmatriculation] = useState("");
  const [assurance, setAssurance] = useState("");
  const [police, setPolice] = useState("");
  const [agence, setAgence] = useState("");
  const [type, setType] = useState("");
  const [checked, setChecked] = useState({
    car: false,
    bike: false,
    truck: false,
  });
  const box = {};

  return (
    <Screen>
      <Header screen="Info" />
      <Title text="Mes Inforamtions personelles" />
      <View style={styles.container}>
        <Text style={styles.titre}>Sélectionnez le type du véhicule : </Text>
        <ScrollView horizontal={true}>
          <Pressable
            onPress={() => {
              setType("Car");
              setChecked({
                car: true,
                bike: false,
                truck: false,
              });
            }}
          >
            <Vehicule
              text={require("../assets/Carred.png")}
              checked={checked.car}
              w={160}
              h={180}
              wid={200}
              heig={200}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setType("MotorBike");
              setChecked({
                car: false,
                bike: true,
                truck: false,
              });
            }}
          >
            <Vehicule
              text={require("../assets/electric.png")}
              checked={checked.bike}
              w={160}
              h={180}
              wid={170}
              heig={170}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setType("Truck");
              setChecked({
                car: false,
                bike: false,
                truck: true,
              });
            }}
          >
            <Vehicule
              text={require("../assets/Truckred.png")}
              checked={checked.truck}
              w={160}
              h={180}
              wid={140}
              heig={140}
            />
          </Pressable>
        </ScrollView>
        <Text style={styles.titre}>
          Saisissez les informations du l'assurance :
        </Text>
        <View style={{ marginTop: -15 }}>
          <Label text="Vehicule assuré par" required={true} />
        </View>
        <Input value={assurance} onChangeText={(a) => setAssurance(a)} />
        <Label text="Police d'Assurance N°" required={true} />
        <Input
          value={police}
          onChangeText={(a) => setPolice(a)}
          type="numeric"
        />
        <Label text="Agence" required={true} />
        <Input
          value={agence}
          type="numeric"
          onChangeText={(a) => setAgence(a)}
        />
        <Text style={styles.titre}>
          Saisissez les informations du véhicule :
        </Text>
        <View style={{ marginTop: -15 }}>
          <Label text="Immatriculation" required={true} />
        </View>
        <Input
          value={immatriculation}
          onChangeText={(i) => setImmatriculation(i)}
        />
        <Label text="Marque" />
        <Input value={marque} onChangeText={(i) => setMarque(i)} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("Info")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            if (type && assurance && police && immatriculation) {
              box["type"] = type;
              box["assurance"] = assurance;
              box["police"] = police;
              box["immatriculation"] = immatriculation;
              if (marque != "") {
                box["marque"] = marque;
              }
              if (agence != "") {
                box["agence"] = agence;
              }
              dispatch(ajout(box));
              navigation.navigate("Info");
            } else {
              Alert.alert(
                "Erreur lors de l'ajout",
                "Vous devez entrer tous les champs obligatoires pour ajouter une véhicule",
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
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    paddingBottom: 20,
  },
  titre: {
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 20,
    fontSize: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 30,
  },
});

export default AjoutVéhicule;
