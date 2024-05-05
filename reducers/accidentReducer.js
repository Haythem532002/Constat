import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accidentA: {
    capturedImageUri: "",
    degat: [],
    squares: Array(12).fill(false),
    descreption: "",
  },
  accidentB: {
    capturedImageUri: "",
    degat: [],
    squares: Array(12).fill(false),
    descreption: "",
  },
};

const accidentSlice = createSlice({
  name: "accident",
  initialState,
  reducers: {
    setAccidentA: (state, action) => {
      state.accidentA = action.payload;
    },
    setAccidentB: (state, action) => {
      state.accidentB = action.payload;
    },
  },
});

export const { accidentA, accidentB, setAccidentA, setAccidentB } =
  accidentSlice.actions;
export default accidentSlice.reducer;
