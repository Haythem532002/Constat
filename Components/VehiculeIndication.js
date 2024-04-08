import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const VehiculeIndication = ({ letter }) => {
  const backColor = () => {
    let obj = {};
    if (letter === "A") {
      obj.backgroundColor = "red";
    } else {
      obj.backgroundColor = "#D9D9D9";
    }
    return obj;
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          {
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
          },
          backColor(),
        ]}
      >
        <Image
          source={require("../assets/WhiteCar.png")}
          resizeMode="contain"
          style={{ width: 40, height: 40 }}
        />
      </View>
      <Text
        style={{
          color: "#ffffff",
          fontWeight: "bold",
          marginLeft: 10,
          fontSize: 20,
        }}
      >
        Vehicule {letter}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical:20
  },
});

export default VehiculeIndication;
