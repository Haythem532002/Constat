import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import Title from "../Components/Title";
import { useSelector } from "react-redux";

const Croquis = ({ text, checked, w, h, desc }) => {
  const colorBack = () => {
    const obj = {};
    if (checked) {
      obj.backgroundColor = "red";
    }
    return obj;
  };
  return (
    <View
      style={[styles.vehiculeContainer, { width: w, height: h }, colorBack()]}
    >
      <View
        style={{
          backgroundColor: "red",
          width: 70,
          height: 70,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 35,
        }}
      >
        <Image source={text} style={styles.image} />
      </View>
      <Text style={{ color: "#ffffff", fontSize: 18, textAlign: "center" }}>
        {desc}
      </Text>
    </View>
  );
};

const ChoixCroquis = () => {
  const navigation = useNavigation();
  const [croquis, setCroquis] = useState("");
  const [checked, setChecked] = useState({
    croquis: false,
    photo: false,
    nonCroquis: false,
  });
  return (
    <Screen>
      <DynamicHeader screen="Accident" num={4} />
      <Title text="Choix de Croquis" />
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            setCroquis("croquis");
            setChecked({
              croquis: true,
              photo: false,
              nonCroquis: false,
            });
          }}
        >
          <Croquis
            text={require("../assets/Pencil.png")}
            checked={checked.croquis}
            w={150}
            h={250}
            desc="Dessiner le Croquis sur le Smartphone"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setCroquis("photo");
            setChecked({
              croquis: false,
              photo: true,
              nonCroquis: false,
            });
          }}
        >
          <Croquis
            text={require("../assets/Camera.png")}
            checked={checked.photo}
            w={150}
            h={250}
            desc="Photographier le Croquis ( Préalablement dessiné sur une feuille)"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setCroquis("nonCroquis");
            setChecked({
              croquis: false,
              photo: false,
              nonCroquis: true,
            });
          }}
        >
          <Croquis
            text={require("../assets/Prohibit.png")}
            checked={checked.nonCroquis}
            w={150}
            h={250}
            desc="Ne pas faire de croquis"
          />
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("Accident")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            if (croquis === "croquis") {
              return navigation.navigate("Croquis");
            } else if (croquis === "photo") {
              return navigation.navigate("PhotoCroquis");
            } else if (croquis === "nonCroquis") {
              return navigation.navigate("InfoSupp");
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
    gap: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 60,
  },
  vehiculeContainer: {
    width: 150,
    height: 150,
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 8,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  image: { width: 40, height: 40 },
});

export default ChoixCroquis;
