import { configureStore } from "@reduxjs/toolkit";
import vehiculeReducer from "../reducers/vehiculeReducer";
import choixVehiculeReducer from "../reducers/choixVehiculeReducer";
import contrat from "../reducers/contrat";
import accidentReducer from "../reducers/accidentReducer";
import circonstancesReducer from "../reducers/circonstancesReducer";
import accidentInfoReducer from "../reducers/accidentInfoReducer";
import croquisReducer from "../reducers/croquisReducer";
import temoinsReducer from "../reducers/temoinsReducer";
import assureReducer from "../reducers/assureReducer";
import conducteurReducer from "../reducers/conducteurReducer";
import assuranceReducer from "../reducers/assuranceReducer";
const store = configureStore({
  reducer: {
    vehicule: vehiculeReducer,
    choixVec: choixVehiculeReducer,
    assurance:assuranceReducer,
    contrat: contrat,
    accident: accidentReducer,
    circonstance: circonstancesReducer,
    accidentInfo: accidentInfoReducer,
    croquis: croquisReducer,
    temoin: temoinsReducer,
    assure: assureReducer,
    conducteur: conducteurReducer,
  },
});

export default store;
