import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import VehiculeIndication from "../Components/VehiculeIndication";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const ChoqBrecap = () => {
  const navigation = useNavigation();
  const { nomB, prenomB, isConB, numTelB } = useSelector(
    (state) => state.assure
  );
  const { nomConB, prenomConB, emailConB } = useSelector(
    (state) => state.conducteur
  );
  const { accidentB } = useSelector((state) => state.accident);
  const { capturedImageUri, degat, descreption } = accidentB;
  return (
    <Screen>
      <DynamicHeader screen="ChoqB" num={2} />
      <VehiculeIndication letter="B" />
      <Text style={styles.textColor}>Informations renseignés : </Text>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>
          {nomB != "" && prenomB != ""
            ? nomB + " " + prenomB
            : "Nom et Prénom de l'assuré"}
        </Text>
      </View>
      {!isConB && (
        <View style={styles.line}>
          <Icon name="circle" size={10} color="#ffffff" />
          <Text style={styles.textColor}>
            {nomConB != "" && prenomConB != ""
              ? nomConB + " " + nomConB
              : "Nom et Prénom de conducteur"}
          </Text>
        </View>
      )}
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>
          {numTelB != "" ? numTelB : "Numéro de téléphonde de l'assuré"}
        </Text>
      </View>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>
          {emailConB != "" ? emailConB : "E-mail du conducteur"}
        </Text>
      </View>
      <Image
        source={{ uri: capturedImageUri }}
        style={{ width: 365, height: 200, borderRadius: 8, marginTop: 10 }}
      />
      {degat.length > 0 && (
        <View style={styles.imageContainer}>
          {degat.map((ele) => (
            <Image
              key={ele}
              source={{ uri: ele }}
              style={{ width: 160, height: 160 }}
            />
          ))}
        </View>
      )}
      <View style={{ marginTop: 20 }}>
        <Text style={styles.titre}>Descreption de damage : </Text>
        <TextInput
          textAlignVertical="top"
          style={[styles.desc, { fontSize: 18 }]}
          value={descreption}
          multiline
          editable={false}
        />
        <Pressable onPress={() => navigation.navigate("ChoqB")}>
          <Text style={styles.mod}>Modifier</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ChoqB")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("Circonstance")}
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
  titre: {
    color: "#ffffff",
    fontSize: 22,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
  mod: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
    paddingVertical: 15,
    color: "#ffffff",
    backgroundColor: "red",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  desc: {
    color: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ffffff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    height: 150,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: 20,
    marginVertical: 20,
  },
});

export default ChoqBrecap;
