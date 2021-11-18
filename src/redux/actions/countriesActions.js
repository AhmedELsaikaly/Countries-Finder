import { setLoading, setCountries, setError } from "../slices/countriesSlice";
import getCountriesApi from "../../api/countriesApis/getCountries";

// get countries action
export const getCountries = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const { data } = await getCountriesApi();
      if (data) {
        dispatch(setCountries(data));
      }
    } catch (error) {
      dispatch(setError(error?.response?.data));
    }
  };
};
