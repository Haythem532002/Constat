import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Header from "../Components/Header";
import Title from "../Components/Title";
import Screen from "./Screen";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Info = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Header screen="Menu" />
      <Title text="Mes Inforamtions personelles" />
      <Text style={[styles.textColor, { marginVertical: 10 }]}>
        Vous pouvez mémoriser jusqu'à 3 véhicule
      </Text>
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
    </Screen>
  );
};

const styles = StyleSheet.create({
  textColor: { color: "#ddd", fontSize: 20 },
});

export default Info;
