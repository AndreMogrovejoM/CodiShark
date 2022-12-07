/**
 * It takes a currency string and returns a string with the name of the currency
 * @param {string} currency - The currency to convert to.
 */
export const getCurrency = (currency: string) => {
  switch (currency) {
    case "PEN":
      return "Sol peruano";
    case "USD":
      return "Dolar americano";

    default:
      return "Sol peruano";
  }
};
