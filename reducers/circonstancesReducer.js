import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  circonstanceA: {},
  circonstanceB: {},
};

const circonstanceSlice = createSlice({
  name: "circonstance",
  initialState,
  reducers: {
    setCirconstanceA: (state, action) => {
      state.circonstanceA = action.payload;
    },
    setCirconstanceB: (state, action) => {
      state.circonstanceB = action.payload;
    },
  },
});

export const {
  circonstanceA,
  circonstanceB,
  setCirconstanceA,
  setCirconstanceB,
} = circonstanceSlice.actions;
export default circonstanceSlice.reducer;
