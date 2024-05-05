import { configureStore } from "@reduxjs/toolkit";
import vehiculeReducer from "../reducers/vehiculeReducer";
import choixVehiculeReducer from "../reducers/choixVehiculeReducer";
import assurance from "../reducers/assurance";
import contrat from "../reducers/contrat";
import accidentReducer from "../reducers/accidentReducer";

const store = configureStore({
  reducer: {
    vehicule: vehiculeReducer,
    choixVec: choixVehiculeReducer,
    assurance: assurance,
    contrat: contrat,
    accident: accidentReducer,
  },
});

export default store;
