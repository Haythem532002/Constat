import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contratA: null,
  contratB: null,
};

const contratSlice = createSlice({
  name: "contrat",
  initialState,
  reducers: {
    setContratA: (state, action) => {
      state.contratA = action.payload;
    },
    setContratB: (state, action) => {
      state.contratB = action.payload;
    },
  },
});

export const { contratA, contratB, setContratA, setContratB } =
  contratSlice.actions;
export default contratSlice.reducer;
