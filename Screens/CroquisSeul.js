import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import IconF from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconE from "react-native-vector-icons/EvilIcons";
import Signature from "react-native-signature-canvas";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";

const CroquisSeul = () => {
  const navigation = useNavigation();
  const ref = useRef();
  const [draw, setDraw] = useState(null);
  const handleOK = (draw) => {
    setDraw(draw);
  };
  const handleEmpty = () => {
    console.log("Empty");
  };
  const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
  }`;
  const handleUndo = () => {
    ref.current.undo();
  };
  return (
    <Screen>
      <DynamicHeader screen="ChoixCroquisSeul" num={4} />
      <Title text="Dessiner le Croquis" />
      <View style={{ width: 380, height: 360, borderWidth: 1 }}>
        <Signature
          ref={ref}
          onOK={handleOK}
          onEmpty={handleEmpty}
          webStyle={style}
        />
      </View>
      <View style={styles.iconContainer}>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            onPress={() => ref.current.changePenColor("#000")}
            style={{ marginHorizontal: 5 }}
          >
            <IconE name="pencil" size={40} />
          </Pressable>
          <Pressable
            onPress={() => ref.current.changePenColor("#ff0000")}
            style={{ marginHorizontal: 5 }}
          >
            <IconE name="pencil" size={40} color="#ff0000" />
          </Pressable>
          <Pressable
            onPress={() => ref.current.changePenColor("green")}
            style={{ marginHorizontal: 5 }}
          >
            <IconE name="pencil" size={40} color="green" />
          </Pressable>
          <Pressable
            onPress={() => ref.current.changePenColor("orange")}
            style={{ marginHorizontal: 5 }}
          >
            <IconE name="pencil" size={40} color="orange" />
          </Pressable>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            onPress={() => handleUndo()}
            style={{ marginHorizontal: 10 }}
          >
            <Icon name="undo" size={30} color="#ffffff" />
          </Pressable>
          <Pressable
            onPress={() => ref.current.clearSignature()}
            style={{ marginHorizontal: 10 }}
          >
            <IconF name="trash" size={30} color="#ffffff" />
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ChoixCroquisSeul")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("InfoSuppSeul")}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 110,
  },
  iconContainer: {
    height: 70,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 8,
    borderColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default CroquisSeul;
