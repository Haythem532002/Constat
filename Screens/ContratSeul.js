import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  Pressable,
} from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import Label from "../Components/Label";
import Input from "../Components/Input";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const ContratSeul = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const isOacity = () => {
    if (modalVisible) {
      return { opacity: 0.2 };
    }
    return {};
  };

  const [numeroContrat, setNumeroContrat] = useState("");
  const [nomAssure, setNomAssure] = useState("");
  const [prenomAssure, setPrenomAssure] = useState("");
  const [numeroTelephone, setNumeroTelephone] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [isAssureConducteur, setIsAssureConducteur] = useState(false);
  const [nomConducteur, setNomConducteur] = useState("");
  const [prenomConducteur, setPrenomConducteur] = useState("");
  const [adresseEmail, setAdresseEmail] = useState("");

  const toggleSwitch = () => setIsAssureConducteur((prev) => !prev);

  useFocusEffect(
    useCallback(() => {
      setModalVisible(false);
      return () => {};
    }, [])
  );

  return (
    <Screen>
      {modalVisible && (
        <View style={styles.modalStyle}>
          <Text
            style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}
          >
            Entrer Le code envoyé sur le téléphone de l'assuré
          </Text>
          <TextInput
            style={{
              borderRadius: 8,
              borderWidth: 1,
              height: 40,
              paddingHorizontal: 20,
              marginTop: 50,
            }}
            keyboardType="numeric"
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 85,
            }}
          >
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={[styles.buttonModal, { marginRight: 10 }]}>
                Annuler
              </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("ChoqSeul")}>
              <Text style={[styles.buttonModal, { backgroundColor: "red" }]}>
                Valider
              </Text>
            </Pressable>
          </View>
        </View>
      )}
      <View style={isOacity()}>
        <DynamicHeader num={2} screen="InfoAssuranceSeul" />
        <Title text="Contrats et Conducteurs" />
        <Label text="Numéro de contrat" />
        <Input value={numeroContrat} onChangeText={setNumeroContrat} />
        <Label text="Nom de l'assuré ou raison sociale" />
        <Input value={nomAssure} onChangeText={setNomAssure} />
        <Label text="Prénom de l'assuré" />
        <Input value={prenomAssure} onChangeText={setPrenomAssure} />
        <Label text="Numéro de téléphone" />
        <Input value={numeroTelephone} onChangeText={setNumeroTelephone} />
        <Label text="Code Postal" />
        <Input value={codePostal} onChangeText={setCodePostal} />
        <View
          style={{ alignItems: "center", flexDirection: "row", marginTop: 10 }}
        >
          <Label text="Le conducteur est l'assuré" />
          <Switch
            trackColor={{ false: "#767577", true: "#ffffff" }}
            thumbColor={isAssureConducteur ? "red" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isAssureConducteur}
          />
        </View>
        {!isAssureConducteur && (
          <View>
            <Label text="Nom de conducteur" />
            <Input value={nomConducteur} onChangeText={setNomConducteur} />
            <Label text="Prénom de conducteur" />
            <Input
              value={prenomConducteur}
              onChangeText={setPrenomConducteur}
            />
            <Label text="Adresse E-mail" />
            <Input value={adresseEmail} onChangeText={setAdresseEmail} />
          </View>
        )}
        <View style={styles.buttonContainer}>
          <ButtonBlanc
            title="Précedent"
            onPress={() => navigation.navigate("InfoAssuranceSeul")}
          />
          <ButtonRouge title="Suivant" onPress={() => setModalVisible(true)} />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    position: "absolute",
    backgroundColor: "#D9D9D9",
    top: "45%",
    left: "3%",
    width: 350,
    height: 400,
    zIndex: 2,
    borderRadius: 8,
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonModal: {
    color: "#ffffff",
    width: 150,
    textAlign: "center",
    paddingVertical: 20,
    borderRadius: 8,
    borderColor: "#ffffff",
    borderWidth: 1,
    fontSize: 20,
  },
});

export default ContratSeul;
