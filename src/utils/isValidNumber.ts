const regex = /^-?\d*\.?\d+$/;

export const isValidNumber = (value?: string) => {
  return value ? regex.test(value.replace(",", ".")) : false;
};
