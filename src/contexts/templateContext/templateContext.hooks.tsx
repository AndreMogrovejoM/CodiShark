import { useContext } from "react";

import { TemplateContextContext } from "./templateContext.context";
import { TemplateContextProviderValue } from "./templateContext.context.types";

const useTemplateContext = () => {
  const context = useContext<TemplateContextProviderValue>(TemplateContextContext);
  if (typeof context === "undefined") {
    throw new Error("useTemplateContext must be used within a TemplateContextProvider");
  }
  return context
};

export default useTemplateContext;
