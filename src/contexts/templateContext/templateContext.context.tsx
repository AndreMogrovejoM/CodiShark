import React, { createContext, useMemo } from "react";
import { ContextDevTool } from "react-context-devtool";

import { TemplateContextProviderProps as Props } from "./templateContext.context.types";
import { TemplateContextProviderValue } from "./templateContext.context.types";

// @ts-ignore
export const TemplateContextContext =
  // @ts-ignore
  createContext<TemplateContextProviderValue>();

const TemplateContextProvider: React.FC<Props> = props => {
  const value: TemplateContextProviderValue = useMemo(() => {
    return {};
  }, []);

  return (
    <TemplateContextContext.Provider value={value}>
      <ContextDevTool
        context={TemplateContextContext}
        id="templateContext"
        displayName="TemplateContext"
      />
      {props.children}
    </TemplateContextContext.Provider>
  );
};

export default TemplateContextProvider;
