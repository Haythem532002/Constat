import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Switch,
  TextInput,
} from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import VehiculeIndication from "../Components/VehiculeIndication";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconF from "react-native-vector-icons/FontAwesome";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const ChoqA = () => {
  const navigation = useNavigation();
  const [squares, setSquares] = useState(Array(12).fill(false));
  const backColor = (checked) => {
    if (checked) {
      return { backgroundColor: "red" };
    }
    return {};
  };
  const [choc, setChoc] = useState(true);
  const [damage, setDamage] = useState("");
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
  const toggleSquare = (index) => {
    const updatedSquares = squares.map((square, i) => i === index);
    setSquares(updatedSquares);
    if (choc) {
      setChoc(false);
    }
  };
  return (
    <Screen>
      <DynamicHeader screen="Contrat" num={2} />
      <VehiculeIndication letter="A" />
      <View
        style={{
          flexDirection: "row",
          marginVertical: 20,
          alignItems: "center",
        }}
      >
        <Icon name="lightbulb" color="#ffffff" size={30} />
        <Text style={{ fontSize: 16, color: "#ffffff", marginLeft: 10 }}>
          Cliquez sur une zone du véhicule pour indiquer le point de choc
          initial
        </Text>
      </View>
      <View
        style={{
          width: 360,
          height: 200,
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#C4C4C5",
          borderRadius: 8,
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Pressable
            style={[
              {
                width: 60,
                height: 70,
                borderWidth: 1,
                borderStyle: "dashed",
              },
              backColor(squares[0]),
            ]}
            onPress={() => toggleSquare(0)}
          />
          <Pressable
            style={[
              {
                width: 60,
                height: 70,
                borderWidth: 1,
                borderStyle: "dashed",
              },
              backColor(squares[1]),
            ]}
            onPress={() => toggleSquare(1)}
          />
          <Pressable
            style={[
              {
                width: 100,
                height: 70,
                borderWidth: 1,
                borderStyle: "dashed",
              },
              backColor(squares[2]),
            ]}
            onPress={() => toggleSquare(2)}
          />
          <Pressable
            style={[
              {
                width: 70,
                height: 70,
                borderWidth: 1,
                borderStyle: "dashed",
              },
              backColor(squares[3]),
            ]}
            onPress={() => toggleSquare(3)}
          />
          <Pressable
            style={[
              {
                width: 70,
                height: 70,
                borderWidth: 1,
                borderStyle: "dashed",
              },
              backColor(squares[4]),
            ]}
            onPress={() => toggleSquare(4)}
          />
          <Pressable
            style={[
              {
                width: 60,
                height: 70,
                borderWidth: 1,
                borderStyle: "dashed",
              },
              backColor(squares[5]),
            ]}
            onPress={() => toggleSquare(5)}
          />
          <Pressable
            style={{
              width: 60,
              height: 70,
              borderWidth: 1,
              borderStyle: "dashed",
            }}
          />
          <Pressable
            style={{
              width: 100,
              height: 70,
              borderWidth: 1,
              borderStyle: "dashed",
            }}
          />
          <Pressable
            style={{
              width: 70,
              height: 70,
              borderWidth: 1,
              borderStyle: "dashed",
            }}
          />
          <Pressable
            style={[
              {
                width: 70,
                height: 70,
                borderWidth: 1,
                borderStyle: "dashed",
              },
              backColor(squares[6]),
            ]}
            onPress={() => toggleSquare(6)}
          />
          <Pressable
            style={[
              {
                width: 60,
                height: 60,
                borderWidth: 1,
                borderStyle: "dashed",
              },
              backColor(squares[7]),
            ]}
            onPress={() => toggleSquare(7)}
          />
          <Pressable
            style={[
              {
                width: 60,
                height: 60,
                borderWidth: 1,
                borderStyle: "dashed",
              },
              backColor(squares[8]),
            ]}
            onPress={() => toggleSquare(8)}
          />
          <Pressable
            style={[
              {
                width: 100,
                height: 60,
                borderWidth: 1,
                borderStyle: "dashed",
              },
              backColor(squares[9]),
            ]}
            onPress={() => toggleSquare(9)}
          />
          <Pressable
            style={[
              {
                width: 70,
                height: 60,
                borderWidth: 1,
                borderStyle: "dashed",
              },
              backColor(squares[10]),
            ]}
            onPress={() => toggleSquare(10)}
          />
          <Pressable
            style={[
              {
                width: 70,
                height: 60,
                borderWidth: 1,
                borderStyle: "dashed",
              },
              backColor(squares[11]),
            ]}
            onPress={() => toggleSquare(11)}
          />
        </View>
        <Image
          source={require("../assets/GrayCar2.png")}
          style={{
            width: 300,
            height: 100,
            position: "absolute",
            marginLeft: 30,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={{ marginTop: 25 }}>
        <View style={styles.cont}>
          <Text style={styles.textColor}>Pas de point de choc</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#ffffff" }}
            thumbColor={choc ? "red" : "#f4f3f4"}
            onValueChange={() => {
              setChoc((prev) => !prev);
              setSquares(Array(12).fill(false));
            }}
            value={choc}
          />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.titre}>Télécharger une photo des dégâts</Text>
        <Pressable onPress={pickImage} style={styles.photo}>
          <IconF name="photo" size={20} color="#ffffff" />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 22,
              color: "#ffffff",
              paddingVertical: 10,
            }}
          >
            Ajouter une Photo
          </Text>
        </Pressable>
      </View>
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
      <View style={{ marginTop: 20 }}>
        <Text style={styles.titre}>Descreption de damage : </Text>
        <TextInput
          value={damage}
          onChangeText={(t) => setDamage(t)}
          textAlignVertical="top"
          style={styles.descreption}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("Contrat")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("ChoqArecap", { squares })}
        />
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  textColor: { color: "#ffffff", fontSize: 20 },
  descreption: {
    color: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ffffff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    height: 150,
  },
  photo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 8,
  },
  cont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titre: {
    color: "#ffffff",
    fontSize: 22,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
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

export default ChoqA;
