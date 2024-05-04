import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AssuranceVec1: null,
  AssuranceVec2: null,
};

const AssuranceSlice = createSlice({
  name: "Assurance",
  initialState,
  reducers: {
    setAssuranceVec1(state, action) {
      state.AssuranceVec1 = action.payload;
    },
    setAssuranceVec2(state, action) {
      state.AssuranceVec2 = action.payload;
    },
  },
});

export const { AssuranceVec1, AssuranceVec2, setAssuranceVec1, setAssuranceVec2 } =
  AssuranceSlice.actions;
export default AssuranceSlice.reducer;
