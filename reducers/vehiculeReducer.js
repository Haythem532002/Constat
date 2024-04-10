import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  assurance: "",
  immatriculation: "",
  numContrat: "",
};

const vehiculeSlice = createSlice({
  name: "vehicule",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setAssurance: (state, action) => {
      state.assurance = action.payload;
    },
    setImmatriculation: (state, action) => {
      state.immatriculation = action.payload;
    },
    setNumContrat: (state, action) => {
      state.numContrat = action.payload;
    },
    resetState: (state) => initialState,
  },
});

export const { setType, setAssurance, setImmatriculation, setNumContrat, resetState } =
  vehiculeSlice.actions;
export default vehiculeSlice.reducer;
