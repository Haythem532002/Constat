import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable,Switch } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import IconF from "react-native-vector-icons/FontAwesome";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
const InfoSupp = () => {
  const navigation = useNavigation();
  const [degat, setDegat] = useState(false);
  const toggleSwitch = () => setDegat((prev) => !prev);
  return (
    <Screen>
      <DynamicHeader screen="PhotoCroquis" num={4} />
      <Title text="Informations Supplémentaires" />
      <Text style={{ color: "#ffffff", fontSize: 18, marginVertical: 20 }}>
        Vous pouvez prendre des photos supplémentaires de l'accident
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
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          marginTop: 10,
          flexWrap: "wrap",
        }}
      >
        <Switch
          trackColor={{ false: "#767577", true: "#ffffff" }}
          thumbColor={degat ? "red" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={degat}
        />
        <Text style={{ color: "#ffffff", fontSize: 16 }}>
          Dégat(s) matériel(s) autre(s) qu'aux véhicule
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ChoixCroquis")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("ObservationA")}
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
    paddingTop: 320,
  },
});

export default InfoSupp;
