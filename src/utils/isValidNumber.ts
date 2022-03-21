const regex = /^-?\d*\.?\d+$/;

export const isValidNumber = (value?: string | number) => {
  if (value === undefined) return false;

  const valueAsNumber = typeof value === "number" ? `${value}` : value.replace(",", ".");

  return regex.test(valueAsNumber);
};
