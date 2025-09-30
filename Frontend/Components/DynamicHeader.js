import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import IconA from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Bars from "./Bars";

const DynamicHeader = ({ screen, num }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate(screen)}
          style={styles.container}
        >
          <IconA name="left" size={25} color="#ffffff" />
          <Text style={styles.textColor}>Retour</Text>
        </Pressable>
        <View style={[styles.container]}>
          <Text style={styles.textColor}>Step {num}/6</Text>
        </View>
        <Bars />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textColor: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
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

export default DynamicHeader;
