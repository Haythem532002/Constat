import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable,Alert } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Vehicule from "../Components/Vehicule";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import VehiculeIndication from "../Components/VehiculeIndication";
import { useDispatch } from "react-redux";
import { setVec1 } from "../reducers/choixVehiculeReducer";
const ChoixVehiculeA = () => {
  const dispatch = useDispatch();
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
      <VehiculeIndication letter="A" />
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
            text={require("../assets/Car2.png")}
            checked={checked.car}
            w={160}
            h={180}
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
            w={160}
            h={180}
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
            w={160}
            h={180}
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
          onPress={() => {
            dispatch(setVec1(vehicule));
            if (vehicule!="") {
              navigation.navigate("ChoixVehiculeB");
            } else {
              Alert.alert(
                "Erreur",
                "Vous devez choisir le type de véhicule",
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
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 160,
  },
});

export default ChoixVehiculeA;
