import React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import Screen from "./Screen";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={styles.header}>
        <Text style={[styles.text, { fontWeight: "bold" }]}>E-constat</Text>
        <Pressable onPress={() => navigation.navigate("Menu")}>
          <Icon name="bars" size={30} color="#ffffff" />
        </Pressable>
      </View>
      <View style={styles.container}>
        <Text
          style={[
            styles.textColor,
            {
              fontSize: 33,
              width: 200,
              textAlign: "center",
              fontWeight: "bold",
            },
          ]}
        >
          Bienvenue sur E-constat
        </Text>
        <Image source={require("../assets/Logo.png")} style={styles.image} />
        <Text
          style={[
            styles.textColor,
            {
              textAlign: "center",
              lineHeight: 27,
              fontSize: 17,
              color: "#eee",
            },
          ]}
        >
          Chez E-constat, nous comprenons que faire face aux conséquences d'un
          accident de voiture peut être stressant et prendre beaucoup de temps.
          C'est pourquoi nous avons développé une plateforme conviviale qui
          simplifie l'ensemble du processus.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => navigation.navigate("Consigne")}
          style={styles.button}
        >
          <Text
            style={[
              styles.textColor,
              { textAlign: "center", fontSize: 20, fontWeight: "bold" },
            ]}
          >
            Démarrer le e-constat
          </Text>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: "red" }]}>
          <Text
            style={[
              styles.textColor,
              { textAlign: "center", fontSize: 20, fontWeight: "bold" },
            ]}
          >
            Découvrir le tutoriel <Icon name="play" color="#ffffff" />
          </Text>
        </Pressable>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={[
            styles.textColor,
            { fontSize: 18, marginTop: 20, fontWeight: "bold" },
          ]}
        >
          Tunisie Assureurs 2024
        </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  textColor: { color: "#ffffff" },
  text: {
    color: "#ffffff",
    fontSize: 23,
  },
  container: {
    marginVertical: 25,
    alignItems: "center",
    height: 450,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
  },
  buttonContainer: {
    alignItems: "center",
    height: 150,
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    width: 250,
    textAlign: "center",
  },
});

export default Home;
