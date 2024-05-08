import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Vehicule from "../Components/Vehicule";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import VehiculeIndication from "../Components/VehiculeIndication";
import { useDispatch } from "react-redux";
import { setTypeB } from "../reducers/vehiculeReducer";
const ChoixVehiculeB = () => {
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
      <DynamicHeader screen="ChoixVehiculeA" num={1} />
      <View style={{ marginTop: 10 }}>
        <VehiculeIndication letter="B" />
      </View>
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
          onPress={() => navigation.navigate("ChoixVehiculeA")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            dispatch(setTypeB(vehicule));
            if (vehicule != "") {
              navigation.navigate("TémoinB");
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
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 150,
  },
});

export default ChoixVehiculeB;
