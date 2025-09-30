import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accidentA: {
    capturedImageUri:
      "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FFront-End-dc24ea75-9305-4250-bc0c-6731d1f9d9c3/ReactNative-snapshot-image4900603920861560905.jpg",
    degat: [],
    squares: Array(12).fill(false),
    descreption: "",
  },
  accidentB: {
    capturedImageUri:
      "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FFront-End-dc24ea75-9305-4250-bc0c-6731d1f9d9c3/ReactNative-snapshot-image4900603920861560905.jpg",
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
