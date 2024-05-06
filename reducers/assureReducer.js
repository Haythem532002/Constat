import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nomA: "",
  nomB: "",
  prenomA: "",
  prenomB: "",
  adresseA: "",
  adresseB: "",
  numTelA: "",
  numTelB: "",
  isConA: false,
  isConB: false,
};

const assureSlice = createSlice({
  name: "assure",
  initialState,
  reducers: {
    setNomA: (state, action) => {
      state.nomA = action.payload;
    },
    setNomB: (state, action) => {
      state.nomB = action.payload;
    },
    setPrenomA: (state, action) => {
      state.prenomA = action.payload;
    },
    setPrenomB: (state, action) => {
      state.prenomB = action.payload;
    },
    setAdresseA: (state, action) => {
      state.adresseA = action.payload;
    },
    setAdresseB: (state, action) => {
      state.adresseB = action.payload;
    },
    setNumTelA: (state, action) => {
      state.numTelA = action.payload;
    },
    setNumTelB: (state, action) => {
      state.numTelB = action.payload;
    },
    setIsConA: (state, action) => {
      state.isConA = action.payload;
    },
    setIsConB: (state, action) => {
      state.isConB = action.payload;
    },
  },
});

export const {
  setNomA,
  setNomB,
  setPrenomA,
  setPrenomB,
  setAdresseA,
  setAdresseB,
  setNumTelA,
  setNumTelB,
  nomA,
  nomB,
  prenomA,
  prenomB,
  adresseA,
  adresseB,
  numTelA,
  numTelB,
  isConA,
  setIsConA,
  isConB,
  setIsConB,
} = assureSlice.actions;
export default assureSlice.reducer;
