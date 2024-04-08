import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import VehiculeIndication from "../Components/VehiculeIndication";
import Icon from "react-native-vector-icons/FontAwesome";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
const Renseigner = () => {
  return (
    <Text
      style={{
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "red",
        borderColor: "#ffffff",
        borderWidth: 1,
        width: 150,
        textAlign: "center",
        paddingVertical: 15,
        borderRadius: 8,
        marginVertical: 15,
      }}
    >
      Modifier
    </Text>
  );
};

const BoxContrat = ({ letter }) => {
  return (
    <View style={styles.container}>
      <VehiculeIndication letter={letter} />
      <Text style={styles.textColor}>Informations renseignés : </Text>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>Numéro de Contrat</Text>
      </View>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>Nom et Prénom de l'assuré(e)</Text>
      </View>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>Nom et Prénom du conductuer</Text>
      </View>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>Numéro de téléphone</Text>
      </View>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>Adresse E-mail</Text>
      </View>
      <Pressable style={{ alignItems: "center" }}>
        <Renseigner />
      </Pressable>
    </View>
  );
};

const Contrat = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <DynamicHeader screen="Home" num={2} />
      <Title text="Contrats et Conducteurs" />
      <BoxContrat letter="A" />
      <BoxContrat letter="B" />
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ContratB")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("ChoqA")}
        />
      </View>
    </Screen>
  );
};

export default Contrat;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 8,
    marginVertical: 10,
  },
  textColor: {
    color: "#ffffff",
    fontSize: 18,
    paddingHorizontal: 20,
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
});
