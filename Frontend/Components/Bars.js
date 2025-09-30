import React from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const MyComponent = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Menu")}>
      <Icon name="bars" size={30} color="#ffffff" />
    </Pressable>
  );
};
export default MyComponent;
