import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./slices/countriesSlice";
const store = configureStore({
  reducer: {
    countries: countriesSlice,
  },
});

export default store;
