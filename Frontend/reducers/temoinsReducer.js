import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temoinTable: [],
};

const temoinSlice = createSlice({
  name: "temoin",
  initialState,
  reducers: {
    ajoutTémoin: (state, action) => {
      state.temoinTable = [...state.temoinTable, action.payload];
    },
    modifieTable: (state, action) => {
      state.temoinTable = action.payload;
    },
  },
});

export const { temoinTable, ajoutTémoin, modifieTable } = temoinSlice.actions;
export default temoinSlice.reducer;
