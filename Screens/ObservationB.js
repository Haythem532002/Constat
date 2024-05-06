import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import VehiculeIndication from "../Components/VehiculeIndication";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setObservationB } from "../reducers/croquisReducer";
const ObservationB = () => {
  const navigation = useNavigation();
  const [commentaire, setCommentaire] = useState("");
  const dispatch = useDispatch();
  return (
    <Screen>
      <DynamicHeader screen="ObservationA" num={5} />
      <Title text="Observations" />
      <View style={{ marginTop: -20 }}>
        <VehiculeIndication letter="B" />
      </View>
      <Text style={{ color: "#ffffff", fontSize: 22, marginBottom: 20 }}>
        Ajouter des précisions sur l'accident :{" "}
      </Text>
      <TextInput
        value={commentaire}
        onChangeText={(t) => setCommentaire(t)}
        placeholderTextColor="#ffffff"
        multiline
        style={styles.text}
        placeholder="Commentaire(optionnel)"
      />
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ObservationA")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            dispatch(setObservationB(commentaire));
            navigation.navigate("SignatureA");
          }}
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
    paddingTop: 230,
  },
  text: {
    height: 200,
    textAlignVertical: "top",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 18,
    color: "#ffffff",
  },
});

export default ObservationB;
