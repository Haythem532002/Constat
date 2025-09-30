import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehicule: [],
  nomAssure: "",
  prenomAssure: "",
  adresseAssure: "",
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    ajout: (state, action) => {
      state.vehicule.push(action.payload);
    },
    modifie: (state, action) => {
      state.vehicule = action.payload;
    },
    setNomAssure: (state, action) => {
      state.nomAssure = action.payload;
    },
    setPrenomAssure: (state, action) => {
      state.prenomAssure = action.payload;
    },
    setAdresseAssure: (state, action) => {
      state.adresseAssure = action.payload;
    },
  },
});

export const {
  vehicule,
  nomAssure,
  prenomAssure,
  adresseAssure,
  ajout,
  modifie,
  setAdresseAssure,
  setNomAssure,
  setPrenomAssure,
} = infoSlice.actions;
export default infoSlice.reducer;
