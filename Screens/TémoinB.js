import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Screen from "./Screen";
import Nav from "../Components/Nav";
import Title from "../Components/Title";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useDispatch, useSelector } from "react-redux";
import { modifieTable } from "../reducers/temoinsReducer";

const TémoinB = () => {
  const navigation = useNavigation();
  const { temoinTable } = useSelector((state) => state.temoin);
  const dispatch = useDispatch();

  const supp = (temoinTable, index) => {
    let j = 0;
    let temp = [];
    for (let i = 0; i < temoinTable.length; i++) {
      if (i !== index) {
        temp[j] = temoinTable[i];
        j++;
      }
    }
  };
  return (
    <Screen>
      <Nav screen="ChoixVehiculeB" />
      <Title text="Ajout des témoins (optionnel)" />
      <Text style={styles.textColor}>
        Vous pouvez ajouter des témoins pour completer votre e-constat
      </Text>
      {temoinTable.length > 0 &&
        temoinTable.map((ele, index) => {
          return (
            <View key={index} style={styles.container}>
              <View>
                <Text style={styles.text}>Témoin {index + 1}</Text>
                <Text style={styles.text}>{ele.fullName}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Pressable
                  onPress={() => {
                    let temp = supp(temoinTable, index);
                    dispatch(modifieTable(temp));
                  }}
                  style={{ marginLeft: 20 }}
                >
                  <Icon name="trash" size={30} color="#ffffff" />
                </Pressable>
              </View>
            </View>
          );
        })}
      <Pressable onPress={() => navigation.navigate("AjoutTémoinB")}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
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
          onPress={() => navigation.navigate("InfoAssurance")}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  textColor: {
    color: "#ddd",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 400,
    marginBottom: 35,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default TémoinB;
