import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  croquis: "",
  infoSupp: [],
  observationA: "",
  observationB: "",
  signatureA: "",
  signatureB: "",
};

const croquisSlice = createSlice({
  name: "croquis",
  initialState,
  reducers: {
    setCroquis: (state, action) => {
      state.croquis = action.payload;
    },
    setInfoSupp: (state, action) => {
      state.infoSupp.push(action.payload);
    },
    setObservationA: (state, action) => {
      state.observationA = action.payload;
    },
    setObservationB: (state, action) => {
      state.observationB = action.payload;
    },
    setSignatureA: (state, action) => {
      state.signatureA = action.payload;
    },
    setSignatureB: (state, action) => {
      state.signatureB = action.payload;
    },
  },
});

export const {
  croquis,
  infoSupp,
  observationA,
  observationB,
  signatureA,
  signatureB,
  setCroquis,
  setInfoSupp,
  setObservationA,
  setSignatureB,
  setSignatureA,
  setObservationB,
} = croquisSlice.actions;

export default croquisSlice.reducer;
