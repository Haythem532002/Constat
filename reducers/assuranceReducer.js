import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  vecAssurA: "",
  policeAssurA: "",
  agenceAssurA: "",
  vecAssurB: "",
  policeAssurB: "",
  agenceAssurB: "",
};
const assuranceSlice = createSlice({
  name: "assurance",
  initialState,
  reducers: {
    setVecAssurA: (state, action) => {
      state.vecAssurA = action.payload;
    },
    setPoliceAssurA: (state, action) => {
      state.policeAssurA = action.payload;
    },
    setAgenceAssurA: (state, action) => {
      state.agenceAssurA = action.payload;
    },
    setVecAssurB: (state, action) => {
      state.vecAssurB = action.payload;
    },
    setPoliceAssurB: (state, action) => {
      state.policeAssurB = action.payload;
    },
    setAgenceAssurB: (state, action) => {
      state.agenceAssurB = action.payload;
    },
  },
});

export const {
  vecAssurA,
  policeAssurA,
  agenceAssurA,
  vecAssurB,
  policeAssurB,
  agenceAssurB,
  setVecAssurA,
  setVecAssurB,
  setPoliceAssurA,
  setPoliceAssurB,
  setAgenceAssurA,
  setAgenceAssurB,
} = assuranceSlice.actions;
export default assuranceSlice.reducer;
