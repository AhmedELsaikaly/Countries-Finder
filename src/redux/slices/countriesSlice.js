import { createSlice } from "@reduxjs/toolkit";
import {
  generateCountryData,
  checkCountryData,
  updateObject,
} from "../../helpers/helpers";

// countries slice initial state
const initialState = {
  loading: false,
  countries: [],
  success: false,
  error: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setCountries: (state, { payload }) => {
      state.loading = false;
      state.countries = payload;
    },
    editCountry: (state, { payload }) => {
      try {
        state.success = false;
        state.error = "";
        const newCountries = state.countries;
        // get the index of country based on flag in order to edit it
        const objIndex = newCountries?.findIndex(
          (country) => country?.flag === payload?.flag
        );
        // throw an error if the country does not exist
        if (objIndex === -1) {
          throw new Error("This Country Is Not Exist ..!");
        }
        // update country data before change the countries array
        newCountries[objIndex] = updateObject(newCountries[objIndex], payload);
        state.countries = newCountries;
        state.success = true;
      } catch (error) {
        state.error = error.message;
      }
    },
    addCountry: (state, { payload }) => {
      try {
        state.success = false;
        state.error = "";
        //validate country data before add it
        checkCountryData(state.countries, payload);
        state.countries = [generateCountryData(payload), ...state.countries];
        state.success = true;
      } catch (error) {
        state.error = error.message;
      }
    },
    setSuccess: (state, { payload }) => {
      state.success = payload;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  setLoading,
  setCountries,
  editCountry,
  addCountry,
  setError,
  setSuccess,
} = countriesSlice.actions;

export default countriesSlice.reducer;
