import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Screen from "./Screen";
import Nav from "../Components/Nav";
import Title from "../Components/Title";
import { useNavigation } from "@react-navigation/native";

const Box = ({ path, text }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={path} style={styles.image} />
      <Text style={{ fontSize: 24, width: 250 }}>{text}</Text>
    </View>
  );
};

const Consigne = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Nav screen="Home" />
      <Title text="Consignes et sécurité" />
      <Text style={styles.textColor}>
        Avant de commencer,mettez vous en sécurité
      </Text>
      <View style={styles.container}>
        <Box
          path={require("../assets/Light.png")}
          text="Allumez vos feux de détresse"
        />
        <Box
          path={require("../assets/GiletBlanc.png")}
          text="Mettez votre gilet de sécurité"
        />
        <Box
          path={require("../assets/Danger.png")}
          text="Installez le triangle de présignalisation"
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate("ModeSaisie")}
        style={{ marginTop: 200 }}
      >
        <Text style={styles.buttonStyle}>Je suis en sécurité</Text>
      </Pressable>
    </Screen>
  );
};

const styles = StyleSheet.create({
  textColor: { color: "#ffffff", fontSize: 20 },
  container: {
    padding: 10,
    backgroundColor: "#D9D9D9",
    marginVertical: 15,
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
  },
  buttonStyle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 22,
    paddingVertical: 10,
    backgroundColor: "red",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 8,
  },
});

export default Consigne;
