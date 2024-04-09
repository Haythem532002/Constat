import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Screen from "./Screen";
import Nav from "../Components/Nav";
import Title from "../Components/Title";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";

const TémoinB = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Nav screen="ChoixVehicule" />
      <Title text="Ajout des témoins (optionnel)" />
      <Text style={styles.textColor}>
        Vous pouvez ajouter jusqu'à 4 témoins pour completer votre e-constat
      </Text>
      <Pressable
        onPress={() => navigation.navigate("AjoutTémoin")}
        style={{ marginVertical: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Icon name="user-circle" size={20} color="#ddd" />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.textColor}>Ajouter un Témoin</Text>
            <View style={{ marginLeft: 10 }}>
              <Icon name="plus-circle" size={20} color="#ddd" />
            </View>
          </View>
        </View>
        <View
          style={{
            height: 2,
            width: "100%",
            backgroundColor: "#ddd",
            marginTop: 5,
          }}
        />
      </Pressable>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ChoixVehiculeB")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("InfoAssuranceA")}
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
  textColor: {
    color: "#ddd",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 320,
  },
});

export default TémoinB;
