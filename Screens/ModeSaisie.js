import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Modal,
  TextInput,
} from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import { useNavigation } from "@react-navigation/native";
import Title from "../Components/Title";

const Button = ({ text }) => {
  return (
    <Text
      style={{
        color: "#ffffff",
        width: 150,
        textAlign: "center",
        paddingVertical: 20,
      }}
    >
      {text}
    </Text>
  );
};

const ModeSaisie = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState("");
  const isOacity = () => {
    if (modalVisible) {
      return { opacity: 0.2 };
    }
    return {};
  };
  const generateRandomCode = () => {
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += Math.floor(Math.random() * 10); 
    }
    setCode(code);
  };
  return (
    <Screen>
      {modalVisible && (
        <View
          style={{
            position: "absolute",
            backgroundColor: "#D9D9D9",
            top: "20%",
            left: "3%",
            width: 350,
            height: 450,
            zIndex: 2,
            borderRadius: 8,
            paddingVertical: 30,
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}
          >
            Remplir un constat avec 2 smartphones{" "}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 20, marginTop: 10 }}>
            Communiquez le code suivant à l'autre conducteur:
          </Text>
          <Text
            style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}
          >
            {code}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 20, marginTop: 10 }}>
            Saisissez à votre tour le code qu'il vous indique
          </Text>
          <TextInput
            style={{
              borderRadius: 8,
              borderWidth: 1,
              height: 40,
              paddingHorizontal: 20,
              marginTop: 20,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 20,
            }}
          >
            <Pressable onPress={() => setModalVisible(false)}>
              <Text
                style={{
                  color: "#ffffff",
                  width: 150,
                  textAlign: "center",
                  paddingVertical: 20,
                  borderRadius: 8,
                  borderColor: "#ffffff",
                  borderWidth: 1,
                  fontSize: 20,
                  marginRight: 10,
                }}
              >
                Annuler
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  color: "#ffffff",
                  width: 150,
                  textAlign: "center",
                  paddingVertical: 20,
                  backgroundColor: "red",
                  borderRadius: 8,
                  borderColor: "#ffffff",
                  borderWidth: 1,
                  fontSize: 20,
                }}
              >
                Valider
              </Text>
            </Pressable>
          </View>
        </View>
      )}
      <View style={isOacity()}>
        <DynamicHeader screen="Consigne" num={1} />
        <Title text="Choisir le mode de Saisie :" />
        <View style={{ alignItems: "center" }}>
          <Pressable onPress={() => navigation.navigate("ChoixVehiculeA")}>
            <View
              style={{
                marginTop: 30,
                width: 250,
                borderWidth: 1,
                borderColor: "#ffffff",
                alignItems: "center",
                borderRadius: 8,
                padding: 10,
              }}
            >
              <Image
                style={{ width: 150, height: 200, resizeMode: "contain" }}
                source={require("../assets/AB.png")}
              />
              <Text style={styles.textColor}>2 Conducteurs</Text>
              <Text style={styles.textColor}>1 Smartphones</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              generateRandomCode();
              setModalVisible(true);
            }}
          >
            <View
              style={{
                marginTop: 30,
                width: 250,
                borderWidth: 1,
                borderColor: "#ffffff",
                alignItems: "center",
                borderRadius: 8,
                padding: 10,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <Image
                  style={{ width: 100, height: 200, resizeMode: "contain" }}
                  source={require("../assets/AA.png")}
                />
                <Image
                  style={{ width: 100, height: 200, resizeMode: "contain" }}
                  source={require("../assets/BB.png")}
                />
              </View>
              <Text style={styles.textColor}>2 Conducteurs</Text>
              <Text style={styles.textColor}>2 Smartphones</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  textColor: { color: "#ffffff", fontSize: 20 },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModeSaisie;
