import { configureStore } from "@reduxjs/toolkit";
import vehiculeReducer from "../reducers/vehiculeReducer";
const store = configureStore({
  reducer: {
    vehicule: vehiculeReducer,
  },
});

export default store;
