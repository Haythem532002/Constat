import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import Header from "../Components/Header";
import Title from "../Components/Title";
import Screen from "./Screen";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import Label from "../Components/Label";
import Input from "../Components/Input";
import { useDispatch } from "react-redux";
import {
  setAdresseAssure,
  setNomAssure,
  setPrenomAssure,
} from "../reducers/infoReducer";

const InfoAssure = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  return (
    <Screen>
      <Header screen="Info" />
      <Title text="Mes Inforamtions personelles" />
      <Text style={[styles.textColor]}>
        Vous pouvez mémoriser les infiramtions de l'assuré
      </Text>
      <Label text="Nom de l'assuré" required={true} />
      <Input value={nom} onChangeText={(n) => setNom(n)} />
      <Label text="Prénom de l'assuré" required={true} />
      <Input value={prenom} onChangeText={(p) => setPrenom(p)} />
      <Label text="Adresse de l'assuré" />
      <Input value={adresse} onChangeText={(a) => setAdresse(a)} />
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("Info")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            if (nom && prenom) {
              dispatch(setNomAssure(nom));
              dispatch(setPrenomAssure(prenom));
              if (adresse != "") {
                dispatch(setAdresseAssure(adresse));
              }
              navigation.navigate("Info");
            } else {
              Alert.alert(
                "Erreur",
                "Vous devez Entrer tous les champs obligatoires"
              );
            }
          }}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  textColor: { color: "#ddd", fontSize: 20 },
  text: {
    color: "white",
    fontSize: 20,
  },
  container: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 150,
  },
});

export default InfoAssure;
