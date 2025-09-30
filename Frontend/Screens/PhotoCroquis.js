import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import IconF from "react-native-vector-icons/FontAwesome";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const PhotoCroquis = () => {
  const navigation = useNavigation();

  const [images, setImages] = useState([]);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && result.assets) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && result.assets) {
      setImages([...images, result.assets[0].uri]);
    }
  };
  return (
    <Screen>
      <DynamicHeader screen="ChoixCroquis" num={4} />
      <Title text="Photo de croquis de l'accident" />
      <Text style={{ color: "#ffffff", fontSize: 18, marginBottom: 10 }}>
        Si vous le souhaitez, vous pouvez prendre en photo le croquis de
        l'accident
      </Text>
      <Pressable onPress={pickImage} style={styles.buttonStyle}>
        <IconF name="photo" size={20} color="#ffffff" />
        <Text style={styles.text}>Ajouter une Photo</Text>
      </Pressable>
      <Pressable onPress={takePhoto} style={styles.buttonStyle}>
        <Text style={styles.text}>Prendre une photo</Text>
      </Pressable>
      {images.length > 0 && (
        <View style={styles.imageContainer}>
          {images.map((ele) => (
            <Image
              key={ele}
              source={{ uri: ele }}
              style={{ width: 160, height: 160 }}
            />
          ))}
        </View>
      )}
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ChoixCroquis")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("InfoSupp")}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 350,
    marginBottom: 35,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: 20,
    marginVertical: 20,
  },
  text: {
    marginLeft: 10,
    fontSize: 22,
    color: "#ffffff",
    paddingVertical: 10,
  },
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 8,
  },
});

export default PhotoCroquis;
