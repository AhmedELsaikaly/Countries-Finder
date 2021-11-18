// make object for the country to add it to countries array
export const generateCountryData = ({
  CountryName,
  capital,
  countryFlag,
  region,
  population,
  lat,
  lng,
  flag,
}) => {
  return {
    name: {
      common: CountryName,
    },
    capital: [capital],
    flags: {
      svg: countryFlag,
    },
    region,
    population,
    latlng: [+lat, +lng],
    flag,
  };
};

// validate the country object before submit it
export const checkCountryData = (countries, payload, isEdit) => {
  let errorMessage = null;
  countries?.forEach(
    ({ flag, name: { common } = {}, capital: [capitalName] = [] } = {}) => {
      if (!isEdit || flag !== payload?.flag) {
        if (flag === payload?.flag) {
          // check the flag (id) existed
          return (errorMessage = "This Country Is Already Exist ..!");
        }
        // check if the country name is existed
        if (common?.toLowerCase() === payload?.CountryName?.toLowerCase()) {
          return (errorMessage = "This Country Name Is Already Exist ..!");
        }
        // check if the capital name is existed
        if (capitalName?.toLowerCase() === payload?.capital?.toLowerCase()) {
          return (errorMessage = "This capital name Is Already Exist ..!");
        }
      }
    }
  );

  if (errorMessage) throw new Error(errorMessage);
};

// update country object before add it to countries array
export const updateObject = (data, payload) => {
  const { CountryName, capital, countryFlag, region, lat, lng, population } =
    payload;

  return {
    ...data,
    name: { common: CountryName },
    flags: { svg: countryFlag },
    capital: [capital],
    population,
    latlng: [+lat, +lng],
    region,
  };
};
