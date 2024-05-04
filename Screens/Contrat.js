import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import VehiculeIndication from "../Components/VehiculeIndication";
import Icon from "react-native-vector-icons/FontAwesome";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Renseigner = () => {
  return <Text style={styles.renseigne}>Modifier</Text>;
};

const BoxContrat = ({ letter, handle, contrat }) => {
  console.log(contrat);
  return (
    <View style={styles.container}>
      <VehiculeIndication letter={letter} />
      <Text style={styles.textColor}>Informations renseignés : </Text>
      {/* <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>
          {contrat != null ? contrat.numeroContrat : "Numéro de Contrat"}
        </Text>
      </View> */}
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>
          {contrat != null
            ? contrat.nomAssure + " " + contrat.prenomAssure
            : "Nom et Prénom de l'assuré(e)"}
        </Text>
      </View>
      {contrat != null && contrat.isAssureConducteur == false ? (
        <View style={styles.line}>
          <Icon name="circle" size={10} color="#ffffff" />
          <Text style={styles.textColor}>
            {contrat.nomConducteur + " " + contrat.prenomConducteur}
          </Text>
        </View>
      ) : null}
      {contrat == null && (
        <View style={styles.line}>
          <Icon name="circle" size={10} color="#ffffff" />
          <Text style={styles.textColor}>Nom et Prénom de conducteur</Text>
        </View>
      )}
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>
          {contrat != null ? contrat.numeroTelAssure : "Numéro de téléphone"}
        </Text>
      </View>
      {contrat != null && contrat.isAssureConducteur == false ? (
        <View style={styles.line}>
          <Icon name="circle" size={10} color="#ffffff" />
          <Text style={styles.textColor}>{contrat.permis}</Text>
        </View>
      ) : null}
      {contrat == null && (
        <View style={styles.line}>
          <Icon name="circle" size={10} color="#ffffff" />
          <Text style={styles.textColor}>Permis de conduire de conducteur</Text>
        </View>
      )}
      <Pressable onPress={handle} style={{ alignItems: "center" }}>
        <Renseigner />
      </Pressable>
    </View>
  );
};

const Contrat = () => {
  const navigation = useNavigation();
  const { contratA } = useSelector((state) => state.contrat);
  const { contratB } = useSelector((state) => state.contrat);
  return (
    <Screen>
      <DynamicHeader screen="InfoAssurance" num={2} />
      <Title text="Informations Sur L'assuré et Conducteur"/>
      <BoxContrat
        letter="A"
        contrat={contratA}
        handle={() => navigation.navigate("ContratA")}
      />
      <BoxContrat
        letter="B"
        contrat={contratB}
        handle={() => navigation.navigate("ContratB")}
      />
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("InfoAssurance")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            // if (contratA == null || contratB == null) {
            //   Alert.alert(
            //     "Erreur",
            //     "Vous devez entrer les informations necessaire pour les 2 vehicules avant de passer à l'étape suivante",
            //     [{ text: "OK" }],
            //     { cancelable: false }
            //   );
            // }
            navigation.navigate("ChoqA");
          }}
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
  renseigne: {
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
  },
});
