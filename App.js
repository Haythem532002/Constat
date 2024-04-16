import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Menu from "./Screens/Menu";
import Info from "./Screens/Info";
import AjoutVéhicule from "./Screens/AjoutVéhicule";
import Consigne from "./Screens/Consigne";
import ModeSaisie from "./Screens/ModeSaisie";
import ChoixVehiculeA from "./Screens/ChoixVehiculeA";
import ChoixVehiculeB from "./Screens/ChoixVehiculeB";
import ChoixVéhiculeSeul from "./Screens/ChoixVéhiculeSeul";
import TémoinB from "./Screens/TémoinB";
import Témoin from "./Screens/Témoin";
import TémoinSeul from "./Screens/TémoinSeul";
import AjoutTémoinA from "./Screens/AjoutTémoinA";
import AjoutTémoinB from "./Screens/AjoutTémoinB";
import AjoutTémoin from "./Screens/AjoutTémoin";
import InfoAssuranceA from "./Screens/InfoAssuranceA";
import InfoAssuranceB from "./Screens/InfoAssuranceB";
import InfoAssuranceSeul from "./Screens/InfoAssuranceSeul";
import InfoAssurance from "./Screens/InfoAssurance";
import ContratA from "./Screens/ContratA";
import ContratB from "./Screens/ContratB";
import Contrat from "./Screens/Contrat";
import ContratSeul from "./Screens/ContratSeul";
import ChoqA from "./Screens/ChoqA";
import ChoqArecap from "./Screens/ChoqArecap";
import ChoqB from "./Screens/ChoqB";
import ChoqBrecap from "./Screens/ChoqBrecap";
import ChoqSeul from "./Screens/ChoqSeul";
import ChoqSeulRecap from "./Screens/ChoqSeulRecap";
import Circonstance from "./Screens/Circonstance";
import CirconstanceSeul from "./Screens/CirconstanceSeul";
import Accident from "./Screens/Accident";
import AccidentSeul from "./Screens/AccidentSeul";
import ChoixCroquis from "./Screens/ChoixCroquis";
import ChoixCroquisSeul from "./Screens/ChoixCroquisSeul";
import PhotoCroquisSeul from "./Screens/PhotoCroquisSeul";
import PhotoCroquis from "./Screens/PhotoCroquis";
import InfoSupp from "./Screens/InfoSupp";
import InfoSuppSeul from "./Screens/InfoSuppSeul";
import ObservationA from "./Screens/ObservationA";
import ObservationB from "./Screens/ObservationB";
import ObservationSeul from "./Screens/ObservationSeul";
import SignatureA from "./Screens/SignatureA";
import SignatureB from "./Screens/SignatureB";
import SignatureSeul from "./Screens/SignatureSeul";
import Croquis from "./Screens/Croquis";
import CroquisSeul from "./Screens/CroquisSeul";
//#151B26
import { Provider } from "react-redux";
import store from "./store/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignatureSeul">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Info"
            component={Info}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AjoutVéhicule"
            component={AjoutVéhicule}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Consigne"
            component={Consigne}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModeSaisie"
            component={ModeSaisie}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChoixVehiculeA"
            component={ChoixVehiculeA}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChoixVehiculeB"
            component={ChoixVehiculeB}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChoixVéhiculeSeul"
            component={ChoixVéhiculeSeul}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TémoinB"
            component={TémoinB}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Témoin"
            component={Témoin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TémoinSeul"
            component={TémoinSeul}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AjoutTémoinA"
            component={AjoutTémoinA}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AjoutTémoinB"
            component={AjoutTémoinB}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AjoutTémoin"
            component={AjoutTémoin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoAssuranceA"
            component={InfoAssuranceA}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoAssuranceB"
            component={InfoAssuranceB}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoAssurance"
            component={InfoAssurance}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoAssuranceSeul"
            component={InfoAssuranceSeul}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ContratA"
            component={ContratA}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ContratB"
            component={ContratB}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ContratSeul"
            component={ContratSeul}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Contrat"
            component={Contrat}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChoqA"
            component={ChoqA}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChoqArecap"
            component={ChoqArecap}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChoqB"
            component={ChoqB}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChoqBrecap"
            component={ChoqBrecap}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChoqSeul"
            component={ChoqSeul}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChoqSeulRecap"
            component={ChoqSeulRecap}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Circonstance"
            component={Circonstance}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CirconstanceSeul"
            component={CirconstanceSeul}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Accident"
            component={Accident}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AccidentSeul"
            component={AccidentSeul}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChoixCroquis"
            component={ChoixCroquis}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChoixCroquisSeul"
            component={ChoixCroquisSeul}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PhotoCroquis"
            component={PhotoCroquis}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PhotoCroquisSeul"
            component={PhotoCroquisSeul}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoSupp"
            component={InfoSupp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoSuppSeul"
            component={InfoSuppSeul}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ObservationA"
            component={ObservationA}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ObservationB"
            component={ObservationB}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ObservationSeul"
            component={ObservationSeul}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignatureA"
            component={SignatureA}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignatureB"
            component={SignatureB}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignatureSeul"
            component={SignatureSeul}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Croquis"
            component={Croquis}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CroquisSeul"
            component={CroquisSeul}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
