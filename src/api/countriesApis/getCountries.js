import axiosClient from "../utils/httpUtil";
import API_ENDPOINTS from "../../constants/apiEndPoints";

/* @ route      get https://restcountries.com/v3.1/all
 * @desc         get all countries
 * @access        Public
 */
const getCountriesApi = () => axiosClient.get(API_ENDPOINTS.GET.allCountries);

export default getCountriesApi;
