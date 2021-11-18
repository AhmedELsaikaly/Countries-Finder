const requiredValidation = {
  required: true,
  message: "Please fill this field",
};
const validationMessage = (name) => `please enter a valid ${name}`;

// country name validation
export const countryName = [
  requiredValidation,
  {
    pattern: /^\W*(?:\w+\D\b\W*){1,3}$/,
    message: validationMessage("country name"),
  },
];

// capital name validation
export const capitalName = [
  requiredValidation,
  {
    pattern: /^\W*(?:\w+\D\b\W*){1,2}$/,
    message: validationMessage("Capital name"),
  },
];

// country flag validation
export const countryFlag = [
  requiredValidation,
  {
    pattern: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/g,
    message: validationMessage("Country Flag url"),
  },
];

// country flag validation
export const regionValidation = [
  requiredValidation,
  {
    pattern: /^\W*(?:\w+\D\b\W*){1,2}$/,
    message: validationMessage("Region name"),
  },
];

// Population validation
export const populationValidation = [
  requiredValidation,
  {
    pattern: /^\d{6,10}?$/gm,
    message: validationMessage("Population"),
  },
];

// latitude validation
export const latitudeValidation = [
  requiredValidation,
  {
    pattern: /^([-]?\d{0,3})(\.\d{1,2})?$/gm,
    message: validationMessage("latitude value"),
  },
];

// longitude validation
export const longitudeValidation = [
  requiredValidation,
  {
    pattern: /^([-]?\d{0,3})(\.\d{1,2})?$/gm,
    message: validationMessage("longitude value"),
  },
];
