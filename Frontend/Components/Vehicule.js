import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Vehicule = ({ text, checked, w, h, wid, heig }) => {
  const colorBack = () => {
    const obj = {};
    if (checked) {
      obj.backgroundColor = "red";
    }
    return obj;
  };
  return (
    <View
      style={[styles.vehiculeContainer, { width: w, height: h }, colorBack()]}
    >
      <Image
        source={text}
        resizeMode="contain"
        style={{ width: wid, height: heig }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vehiculeContainer: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 8,
    marginHorizontal: 5,
  },
});

export default Vehicule;
