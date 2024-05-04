import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import VehiculeIndication from "../Components/VehiculeIndication";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRoute } from "@react-navigation/native";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
const ChoqArecap = () => {
  const navigation = useNavigation();
  const squares = useRoute().params ? useRoute().params.squares : null;
  const backColor = (checked) => {
    if (checked) {
      return { backgroundColor: "red" };
    }
    return {};
  };
  return (
    <Screen>
      <DynamicHeader screen="ChoqA" num={2} />
      <VehiculeIndication letter="A" />
      <Text style={styles.textColor}>Informations renseignés : </Text>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>Numéro de Contrat</Text>
      </View>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>Nom et Prénom de l'assuré(e)</Text>
      </View>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>Nom et Prénom du conductuer</Text>
      </View>
      <View style={styles.line}>
        <Icon name="circle" size={10} color="#ffffff" />
        <Text style={styles.textColor}>Numéro de téléphone</Text>
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
      <View style={{ marginTop: 20 }}>
        <Text style={styles.titre}>Descreption de damage : </Text>
        <TextInput
          textAlignVertical="top"
          style={{
            color: "#ffffff",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#ffffff",
            paddingVertical: 15,
            paddingHorizontal: 15,
            height: 150,
          }}
        />
        <Pressable onPress={() => navigation.navigate("ChoqA")}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              marginVertical: 20,
              paddingVertical: 15,
              color: "#ffffff",
              backgroundColor: "red",
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#ffffff",
            }}
          >
            Modifier
          </Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ChoqA")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => navigation.navigate("ChoqB")}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  textColor: {
    color: "#ffffff",
    fontSize: 18,
    paddingHorizontal: 20,
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 5,
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
});

export default ChoqArecap;
