import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import IconA from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Nav = ({screen}) => {
    const navigation=useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate(screen)}
          style={styles.container}
        >
          <IconA name="left" size={30} color="#ffffff" />
          <Text style={styles.textColor}>Retour</Text>
        </Pressable>
        <View style={[styles.container]}>
          <Image source={require("../assets/Logo.png")} style={styles.image} />
          <Text style={styles.textColor}>E-constat</Text>
        </View>
        <Pressable onPress={()=>navigation.navigate("Menu")}>
          <Icon name="bars" size={30} color="#ffffff" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textColor: { color: "#ffffff", fontSize: 18, fontWeight: "bold" },
  image: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
  },
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Nav;
