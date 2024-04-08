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

const BoxAssurance = ({ letter }) => {
  return (
    <View style={styles.container}>
      <VehiculeIndication letter={letter} />
      <Text style={styles.textColor}>Informations renseignés : </Text>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>L'assureur du véhicule</Text>
      </View>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>L'immatriculation du véhicule</Text>
      </View>
      <Pressable style={{ alignItems: "center" }}>
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
