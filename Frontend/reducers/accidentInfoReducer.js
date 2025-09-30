import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dateS: "",
  heureS: "",
  lieuS: "",
  codePostalS: "",
  villeS: "",
};

const accidentInfoSlice = createSlice({
  name: "accidentInfo",
  initialState,
  reducers: {
    setDateS: (state, action) => {
      state.dateS = action.payload;
    },
    setHeureS: (state, action) => {
      state.heureS = action.payload;
    },
    setLieuS: (state, action) => {
      state.lieuS = action.payload;
    },
    setCodePostalS: (state, action) => {
      state.codePostalS = action.payload;
    },
    setVilleS: (state, action) => {
      state.villeS = action.payload;
    },
  },
});

export const {
  dateS,
  heureS,
  lieuS,
  codePostalS,
  villeS,
  setDateS,
  setHeureS,
  setLieuS,
  setCodePostalS,
  setVilleS,
} = accidentInfoSlice.actions;
export default accidentInfoSlice.reducer;
