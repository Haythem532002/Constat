import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Switch } from "react-native";
import Screen from "./Screen";
import DynamicHeader from "../Components/DynamicHeader";
import Title from "../Components/Title";
import ButtonBlanc from "../Components/ButtonBlanc";
import ButtonRouge from "../Components/ButtonRouge";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setCirconstance } from "../reducers/constatSeulReducer";

const Box = ({ text, checkedA, onToggleA }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginVertical: 8,
      }}
    >
      <Switch
        trackColor={{ false: "#767577", true: "#ffffff" }}
        thumbColor={checkedA ? "red" : "#f4f3f4"}
        onValueChange={onToggleA}
        value={checkedA}
      />
      <Text
        style={{
          color: "#ffffff",
          fontSize: 20,
          width: 300,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </View>
  );
};
const Line = () => {
  return (
    <View style={{ alignItems: "center", marginVertical: 10 }}>
      <View
        style={{
          backgroundColor: "#fff",
          height: 3,
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
        }}
      ></View>
    </View>
  );
};

const CirconstanceSeul = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [boxStatesA, setBoxStatesA] = useState({
    stationnement: false,
    quittaitStationnement: false,
    prenaitStationnement: false,
    sortaitParking: false,
    sengageaitParking: false,
    arretCirculation: false,
    frottement: false,
    heurtaitArriere: false,
    roulaitMemeSens: false,
    changeaitFile: false,
    doublait: false,
    viraitDroite: false,
    viraitGauche: false,
    reculait: false,
    empletait: false,
    venaitDroite: false,
    navaitPasObserved: false,
    aucun: false,
  });

  const handleBoxToggleA = (boxName) => {
    setBoxStatesA((prevState) => ({
      ...prevState,
      [boxName]: !prevState[boxName],
    }));
  };

  return (
    <Screen>
      <DynamicHeader screen="ChoqSeulRecap" num={3} />
      <Title text="Circonstances" />
      <View style={styles.container}>
        <Box
          text="en stationnement"
          checkedA={boxStatesA.stationnement}
          onToggleA={() => {
            handleBoxToggleA("stationnement");
            if (boxStatesA.quittaitStationnement == true) {
              handleBoxToggleA("quittaitStationnement");
            }
            if (boxStatesA.prenaitStationnement == true) {
              handleBoxToggleA("prenaitStationnement");
            }
            if (boxStatesA.aucun) {
              handleBoxToggleA("aucun");
            }
          }}
        />
        <Box
          text="quittait un stationnement"
          checkedA={boxStatesA.quittaitStationnement}
          onToggleA={() => {
            handleBoxToggleA("quittaitStationnement");
            if (boxStatesA.stationnement == true) {
              handleBoxToggleA("stationnement");
            }
            if (boxStatesA.prenaitStationnement == true) {
              handleBoxToggleA("prenaitStationnement");
            }
            if (boxStatesA.aucun) {
              handleBoxToggleA("aucun");
            }
          }}
        />
        <Box
          text="prenait un stationnement"
          checkedA={boxStatesA.prenaitStationnement}
          onToggleA={() => {
            handleBoxToggleA("prenaitStationnement");
            if (boxStatesA.stationnement == true) {
              handleBoxToggleA("stationnement");
            }
            if (boxStatesA.quittaitStationnement == true) {
              handleBoxToggleA("quittaitStationnement");
            }
            if (boxStatesA.aucun) {
              handleBoxToggleA("aucun");
            }
          }}
        />
        <Line />
        <Box
          text="sortait d'un parking,d'un lieu privé,d'un chemin de terre"
          checkedA={boxStatesA.sortaitParking}
          onToggleA={() => {
            handleBoxToggleA("sortaitParking");
            if (boxStatesA.sengageaitParking) {
              handleBoxToggleA("sengageaitParking");
            }
          }}
        />
        <Box
          text="s'engageait dans un parking, un lieu privé,un chemin de terre"
          checkedA={boxStatesA.sengageaitParking}
          onToggleA={() => {
            handleBoxToggleA("sengageaitParking");
            if (boxStatesA.sortaitParking) {
              handleBoxToggleA("sortaitParking");
            }
          }}
        />
        <Line />
        <Box
          text="arrét de circulation"
          checkedA={boxStatesA.arretCirculation}
          onToggleA={() => handleBoxToggleA("arretCirculation")}
        />
        <Box
          text="frottement sans changement de file"
          checkedA={boxStatesA.frottement}
          onToggleA={() => handleBoxToggleA("frottement")}
        />
        <Box
          text="heurtait à l'arriere,en roulant dans le méme sens et sur une méme file"
          checkedA={boxStatesA.heurtaitArriere}
          onToggleA={() => {
            handleBoxToggleA("heurtaitArriere");
            if (boxStatesA.roulaitMemeSens) {
              handleBoxToggleA("roulaitMemeSens");
            }
          }}
        />
        <Box
          text="roulait dans le méme sens et sur une file différente"
          checkedA={boxStatesA.roulaitMemeSens}
          onToggleA={() => {
            handleBoxToggleA("roulaitMemeSens");
            if (boxStatesA.heurtaitArriere) {
              handleBoxToggleA("heurtaitArriere");
            }
          }}
        />
        <Box
          text="changeait de file"
          checkedA={boxStatesA.changeaitFile}
          onToggleA={() => handleBoxToggleA("changeaitFile")}
        />
        <Box
          text="doublait"
          checkedA={boxStatesA.doublait}
          onToggleA={() => handleBoxToggleA("doublait")}
        />
        <Line />
        <Box
          text="virait à droite"
          checkedA={boxStatesA.viraitDroite}
          onToggleA={() => {
            handleBoxToggleA("viraitDroite");
            if (boxStatesA.viraitGauche) {
              handleBoxToggleA("viraitGauche");
            }
          }}
        />
        <Box
          text="virait à gauche"
          checkedA={boxStatesA.viraitGauche}
          onToggleA={() => {
            handleBoxToggleA("viraitGauche");
            if (boxStatesA.viraitDroite) {
              handleBoxToggleA("viraitDroite");
            }
          }}
        />
        <Line />
        <Box
          text="reculait"
          checkedA={boxStatesA.reculait}
          onToggleA={() => handleBoxToggleA("reculait")}
        />
        <Box
          text="emplétait sur la partie de chaussée reservée à la circulation en sens inverse"
          checkedA={boxStatesA.empletait}
          onToggleA={() => handleBoxToggleA("empletait")}
        />
        <Box
          text="venait de droite(dans un carrefour)"
          checkedA={boxStatesA.venaitDroite}
          onToggleA={() => handleBoxToggleA("venaitDroite")}
        />
        <Box
          text="n'avait pas observé le signal de priorité"
          checkedA={boxStatesA.navaitPasObserved}
          onToggleA={() => {
            handleBoxToggleA("navaitPasObserved");
            if (boxStatesA.aucun) {
              handleBoxToggleA("aucun");
            }
          }}
        />
      </View>
      <View
        style={{
          marginVertical: 20,
          backgroundColor: "gray",
          paddingVertical: 20,
          paddingHorizontal: 10,
          borderRadius: 8,
        }}
      >
        <Box
          text="Ma situation ne correspond à aucune de ces propositions"
          checkedA={boxStatesA.aucun}
          onToggleA={() => {
            handleBoxToggleA("aucun");
            if (boxStatesA.stationnement) {
              handleBoxToggleA("stationnement");
            }
            if (boxStatesA.quittaitStationnement) {
              handleBoxToggleA("quittaitStationnement");
            }
            if (boxStatesA.prenaitStationnement) {
              handleBoxToggleA("prenaitStationnement");
            }
            if (boxStatesA.sortaitParking) {
              handleBoxToggleA("sortaitParking");
            }
            if (boxStatesA.sengageaitParking) {
              handleBoxToggleA("sengageaitParking");
            }
            if (boxStatesA.arretCirculation) {
              handleBoxToggleA("arretCirculation");
            }
            if (boxStatesA.frottement) {
              handleBoxToggleA("frottement");
            }
            if (boxStatesA.heurtaitArriere) {
              handleBoxToggleA("heurtaitArriere");
            }
            if (boxStatesA.roulaitMemeSens) {
              handleBoxToggleA("roulaitMemeSens");
            }
            if (boxStatesA.changeaitFile) {
              handleBoxToggleA("changeaitFile");
            }
            if (boxStatesA.doublait) {
              handleBoxToggleA("doublait");
            }
            if (boxStatesA.viraitDroite) {
              handleBoxToggleA("viraitDroite");
            }
            if (boxStatesA.viraitGauche) {
              handleBoxToggleA("viraitGauche");
            }
            if (boxStatesA.reculait) {
              handleBoxToggleA("reculait");
            }
            if (boxStatesA.empletait) {
              handleBoxToggleA("empletait");
            }
            if (boxStatesA.venaitDroite) {
              handleBoxToggleA("venaitDroite");
            }
            if (boxStatesA.navaitPasObserved) {
              handleBoxToggleA("navaitPasObserved");
            }
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonBlanc
          title="Précedent"
          onPress={() => navigation.navigate("ChoqSeulRecap")}
        />
        <ButtonRouge
          title="Suivant"
          onPress={() => {
            dispatch(setCirconstance(boxStatesA));
            navigation.navigate("AccidentSeul");
          }}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ffffff",
    marginVertical: 10,
    borderRadius: 8,
  },
  titre: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  line: {
    borderWidth: 1,
    borderColor: "#ffffff",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
});

export default CirconstanceSeul;
