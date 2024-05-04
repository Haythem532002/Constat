import { configureStore } from "@reduxjs/toolkit";
import vehiculeReducer from "../reducers/vehiculeReducer";
import choixVehiculeReducer from "../reducers/choixVehiculeReducer";
import assurance from "../reducers/assurance";
import contrat from "../reducers/contrat";

const store = configureStore({
  reducer: {
    vehicule: vehiculeReducer,
    choixVec: choixVehiculeReducer,
    assurance: assurance,
    contrat: contrat,
  },
});

export default store;
