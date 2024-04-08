import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import VehiculeIndication from "../Components/VehiculeIndication";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
const ObservationA = () => {
  const navigation = useNavigation();
  const [commentaire, setCommentaire] = useState("");
  return (
    <Screen>
      <DynamicHeader screen="InfoSupp" num={5} />
      <Title text="Observations" />
      <VehiculeIndication letter="A" />
      <Text style={{ color: "#ffffff", fontSize: 22, marginBottom: 20 }}>
        Ajouter des précisions sur l'accident :{" "}
      </Text>
      <TextInput
        value={commentaire}
        onChangeText={(t) => setCommentaire(t)}
        placeholderTextColor="#ffffff"
        style={{
          height: 200,
          textAlignVertical: "top",
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderColor: "#ffffff",
          borderWidth: 1,
          borderRadius: 8,
          fontSize: 18,
          color:"#ffffff"
          
        }}
        placeholder="Commentaire(optionnel)"
      />
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ChoixCroquis")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("ObservationB")}
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
    paddingTop: 210,
  },
});

export default ObservationA;
