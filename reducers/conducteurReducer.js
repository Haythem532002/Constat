import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nomConA: "",
  nomConB: "",
  prenomConA: "",
  prenomConB: "",
  adresseConA: "",
  adresseConB: "",
  permisConA: "",
  permisConB: "",
  emailConA: "",
  emailConB: "",
};

const conducteurSlice = createSlice({
  name: "conducteur",
  initialState,
  reducers: {
    setNomConA: (state, action) => {
      state.nomConA = action.payload;
    },
    setNomConB: (state, action) => {
      state.nomConB = action.payload;
    },
    setPrenomConA: (state, action) => {
      state.prenomConA = action.payload;
    },
    setPrenomConB: (state, action) => {
      state.prenomConB = action.payload;
    },
    setAdresseConA: (state, action) => {
      state.adresseConA = action.payload;
    },
    setAdresseConB: (state, action) => {
      state.adresseConB = action.payload;
    },
    setPermisConA: (state, action) => {
      state.permisConA = action.payload;
    },
    setPermisConB: (state, action) => {
      state.permisConB = action.payload;
    },
    setEmailConA: (state, action) => {
      state.emailConA = action.payload;
    },
    setEmailConB: (state, action) => {
      state.emailConB = action.payload;
    },
  },
});

export const {
  nomConA,
  nomConB,
  prenomConA,
  prenomConB,
  adresseConA,
  adresseConB,
  permisConA,
  permisConB,
  emailConA,
  emailConB,
  setNomConA,
  setNomConB,
  setPrenomConA,
  setPrenomConB,
  setPermisConA,
  setPermisConB,
  setEmailConA,
  setEmailConB,
  setAdresseConA,
  setAdresseConB,
} = conducteurSlice.actions;
export default conducteurSlice.reducer;
