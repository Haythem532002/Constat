import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Header from "../Components/Header";
import Title from "../Components/Title";
import Screen from "./Screen";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { modifie } from "../reducers/infoReducer";

const Info = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { vehicule } = useSelector((state) => state.info);
  const supp = (vehicule,index) => {
    let j = 0;
    let temp = [];
    for (let i = 0; i < vehicule.length; i++) {
      if (i !== index) {
        temp[j] = vehicule[i];
        j++;
      }
    }
    return temp;
  };
  return (
    <Screen>
      <Header screen="Menu" />
      <Title text="Mes Inforamtions personelles" />
      <Text style={[styles.textColor, { marginVertical: 10 }]}>
        Vous pouvez mémoriser vos véhicules ici
      </Text>
      {vehicule.length > 0 &&
        vehicule.map((ele, index) => (
          <View style={styles.container} key={index}>
            <View>
              <Text style={styles.text}>Véhicule {index + 1}</Text>
              <Text style={styles.text}>{ele.immatriculation}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                onPress={() => {
                  let temp = supp(vehicule,index);
                  dispatch(modifie(temp));
                }}
                style={{ marginLeft: 20 }}
              >
                <Icon name="trash" size={30} color="#ffffff" />
              </Pressable>
            </View>
          </View>
        ))}
      <Pressable
        onPress={() => navigation.navigate("AjoutVéhicule")}
        style={{ marginVertical: 20 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.textColor}>Ajouter un véhicule</Text>
          <Icon name="plus-circle" size={20} color="#ddd" />
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
          onPress={() => navigation.navigate("Home")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("InfoAssure")}
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
    marginTop: 380,
    marginBottom: 30,
  },
});

export default Info;

{
  /* <View style={styles.container}>
  <View>
    <Text style={styles.text}>Véhicule 1</Text>
    <Text style={styles.text}>1234 AB 75</Text>
  </View>
  <View style={{ flexDirection: "row" }}>
    <Pressable>
      <Icon name="edit" size={30} color="#ffffff" />
    </Pressable>
    <Pressable style={{ marginLeft: 20 }}>
      <Icon name="trash" size={30} color="#ffffff" />
    </Pressable>
  </View>
</View> */
}
