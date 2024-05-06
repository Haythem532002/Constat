import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import Screen from "./Screen";
import Title from "../Components/Title";
import DynamicHeader from "../Components/DynamicHeader";
import BoxAssurance from "../Components/BoxAssurance";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const InfoAssurance = () => {
  const navigation = useNavigation();
  const { vecAssurA, vecAssurB } = useSelector((state) => state.assurance);
  const { immatriculationA, immatriculationB } = useSelector(
    (state) => state.vehicule
  );
  return (
    <Screen>
      <DynamicHeader num={1} screen="TémoinB" />
      <Title text="Informations Sur Assurances et Véhicules" />
      <BoxAssurance
        letter="A"
        handle={() => navigation.navigate("InfoAssuranceA")}
        assurance={vecAssurA}
        immat={immatriculationA}
      />
      <BoxAssurance
        letter="B"
        handle={() => navigation.navigate("InfoAssuranceB")}
        assurance={vecAssurB}
        immat={immatriculationB}
      />
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("TémoinB")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            // if (AssuranceVec1 == null || AssuranceVec2 == null) {
            //   Alert.alert(
            //     "Erreur",
            //     "Vous devez entrer les informations necessaire pour les 2 vehicules avant de passer à l'étape suivante",
            //     [{ text: "OK" }],
            //     { cancelable: false }
            //   );
            // } else {
            //   navigation.navigate("Contrat");
            // }
            navigation.navigate("Contrat");
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
    marginVertical: 30,
  },
});

export default InfoAssurance;
