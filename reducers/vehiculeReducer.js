import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeA: "",
  immatriculationA: "",
  marqueA: "",
  typeB: "",
  immatriculationB: "",
  marqueB: "",
};

const vehiculeSlice = createSlice({
  name: "vehicule",
  initialState,
  reducers: {
    setTypeA: (state, action) => {
      state.typeA = action.payload;
    },
    setImmatriculationA: (state, action) => {
      state.immatriculationA = action.payload;
    },
    setMarqueA: (state, action) => {
      state.marqueA = action.payload;
    },
    setTypeB: (state, action) => {
      state.typeB = action.payload;
    },
    setImmatriculationB: (state, action) => {
      state.immatriculationB = action.payload;
    },
    setMarqueB: (state, action) => {
      state.marqueB = action.payload;
    },
    resetState: () => initialState,
  },
});

export const {
  setTypeA,
  setImmatriculationA,
  setMarqueA,
  setTypeB,
  setImmatriculationB,
  setMarqueB,
  resetState,
  typeA,
  typeB,
  marqueA,
  marqueB,
  immatriculationA,
  immatriculationB,
} = vehiculeSlice.actions;
export default vehiculeSlice.reducer;
