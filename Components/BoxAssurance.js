import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import VehiculeIndication from "../Components/VehiculeIndication";
import Icon from "react-native-vector-icons/FontAwesome";

const Renseigner = () => {
  return (
    <Text
      style={{
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "red",
        borderColor: "#ffffff",
        borderWidth: 1,
        width: 150,
        textAlign: "center",
        paddingVertical: 15,
        borderRadius: 8,
        marginVertical: 15,
      }}
    >
      Modifier
    </Text>
  );
};

const BoxAssurance = ({ letter, handle, assurance, immat }) => {
  let a = "L'assureur du véhicule";
  if (assurance.length != 0) {
    a = assurance;
  }
  let i = "L'immatriculation du véhicule";
  if (immat.length != 0) {
    i = immat;
  }
  return (
    <View style={styles.container}>
      <VehiculeIndication letter={letter} />
      <Text style={styles.textColor}>Informations renseignés : </Text>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>{a}</Text>
      </View>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>{i}</Text>
      </View>
      <Pressable onPress={handle} style={{ alignItems: "center" }}>
        <Renseigner />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 8,
    marginVertical: 10,
  },
  textColor: {
    color: "#ffffff",
    fontSize: 18,
    paddingHorizontal: 20,
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
export default BoxAssurance;
