import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Vehicule from "../Components/Vehicule";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import Title from "../Components/Title";
const ChoixVehiculeSeul = () => {
  const navigation = useNavigation();
  const [vehicule, setVehicule] = useState("");
  const [checked, setChecked] = useState({
    car: false,
    bike: false,
    truck: false,
  });
  return (
    <Screen>
      <DynamicHeader screen="ModeSaisie" num={1} />
      <Title text="Choix Type Véhiclue : " />
      <View>
        <View style={styles.container}>
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
              setVehicule("MotorBike");
              setChecked({
                car: false,
                bike: true,
                truck: false,
              });
            }}
          >
            <Vehicule
              text={require("../assets/moto.png")}
              checked={checked.bike}
              w={160}
              h={180}
              wid={150}
              heig={150}
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
              text={require("../assets/Truckred.png")}
              checked={checked.truck}
              w={160}
              h={180}
              wid={140}
              heig={140}
            />
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonBlanc
            title="Précedent"
            onPress={() => navigation.navigate("ModeSaisie")}
          />
          <ButtonRouge
            title="Suivant"
            onPress={() => navigation.navigate("TémoinSeul")}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 180,
  },
});

export default ChoixVehiculeSeul;
