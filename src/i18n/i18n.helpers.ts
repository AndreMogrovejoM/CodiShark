// i18n helper functions
import i18n from "./i18n";
import { Dictionary, Locales } from "./i18n.types";
import locales from "./locales";

export const getI18NHelper = <D extends Dictionary = Dictionary>(
  language: string,
  locales: Locales<D>
) => {
  const { en, es } = locales;
  switch (language) {
    case "en":
      return en;
    case "es":
      return es;
    default:
      return es;
  }
};

const getI18n = (): Dictionary => {
  return getI18NHelper(i18n.language, locales);
};

export default getI18n;
