import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vec1: "",
  temoin1: [],
  vec2: "",
  temoin2: [],
};

const choixSlice = createSlice({
  name: "choix",
  initialState,
  reducers: {
    setVec1(state, action) {
      state.vec1 = action.payload;
    },
    setTemoin1(state, action) {
      state.temoin1.push (action.payload);
    },
    setVec2(state, action) {
      state.vec2 = action.payload;
    },
    setTemoin2(state, action) {
      state.temoin2.push(action.payload);
    },
  },
});

export const { setVec1, setVec2, setTemoin1, setTemoin2 } = choixSlice.actions;
export default choixSlice.reducer;
