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
export const checkCountryData = (countries, payload) => {
  // check the flag (id) id existed
  const isFlagExist = countries.find((item) => item.flag === payload.flag);
  if (isFlagExist) {
    throw new Error("This Country Is Already Exist ..!");
  }
  // check if the country name is existed
  const isCountryExist = countries.find(
    (item) => item.name.common === payload.CountryName
  );
  if (isCountryExist) {
    throw new Error("This Country Name Is Already Exist ..!");
  }
  // check if the capital name is existed
  const isCapitalExist = countries.find(
    (item) => item.capital[0] === payload.capital
  );
  if (isCapitalExist) {
    throw new Error("This capital name Is Already Exist ..!");
  }
};

// update country object before add it to countries array
export const updateObject = (data, payload) => {
  const newCountry = data;
  newCountry.name.common = payload.CountryName;
  newCountry.capital[0] = payload.capital;
  newCountry.flags.svg = payload.countryFlag;
  newCountry.region = payload.region;
  newCountry.population = payload.population;
  newCountry.latlng = [+payload.lat, +payload.lng];
  return newCountry;
};
