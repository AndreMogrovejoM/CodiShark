import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { getI18NHelper } from "./i18n.helpers";
import locales from "./locales";

const useI18n = () => {
  const { language } = useTranslation().i18n;
  return useMemo(() => getI18NHelper(language, locales), [language]);
};

export default useI18n;
