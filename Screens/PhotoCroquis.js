import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import IconF from "react-native-vector-icons/FontAwesome";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
const PhotoCroquis = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <DynamicHeader screen="PhotoCroquis" num={4} />
      <Title text="Photo de croquis de l'accident" />
      <Text style={{ color: "#ffffff", fontSize: 18, marginVertical: 20 }}>
        Si vous le souhaitez, vous pouvez prendre en photo le croquis de
        l'accident
      </Text>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 5,
          backgroundColor: "red",
          borderWidth: 1,
          borderColor: "#ffffff",
          borderRadius: 8,
        }}
      >
        <IconF name="photo" size={20} color="#ffffff" />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 22,
            color: "#ffffff",
            paddingVertical: 10,
          }}
        >
          Ajouter une Photo
        </Text>
      </Pressable>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ChoixCroquis")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("InfoSupp")}
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
    paddingTop: 370,
  },
});

export default PhotoCroquis;
