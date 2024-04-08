import React, { useEffect } from "react";
import Screen from "./Screen";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../Components/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import IconA from "react-native-vector-icons/AntDesign";
import IconS from "react-native-vector-icons/SimpleLineIcons";

const Menu = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 13 }}>
        <Header screen="Home"/>
      </View>
      <View style={styles.user}>
        <Icon name="user-circle" size={150} color="#ffffff" />
      </View>
      <View style={styles.info}>
        <Pressable onPress={()=>navigation.navigate("Info")}>
          <View style={styles.press}>
            <IconS name="bag" size={30} color="#ffffff" />
            <Text style={styles.textColor}>Mes Informations personelles</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.press}>
            <IconA name="star" size={30} color="#ffffff" />
            <Text style={styles.textColor}>Noter l'application</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    backgroundColor: "gray",
    padding: 40,
    height: 400,
  },
  container: {
    flex: 1,
    backgroundColor: "#151B26",
    paddingTop: 20,
    color: "#ffffff",
  },
  textColor: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
    width: 200,
    marginLeft:20
  },
  press: { flexDirection: "row", alignItems: "center", marginVertical: 20 },
});

export default Menu;
