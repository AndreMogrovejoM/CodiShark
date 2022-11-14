import React, { createContext, useMemo, useState } from "react";

import { GlobalsProviderProps as Props } from "./globals.context.types";
import { GlobalsProviderValue } from "./globals.context.types";

// @ts-ignore
export const GlobalsContext = createContext<GlobalsProviderValue>({});

const GlobalsProvider: React.FC<Props> = props => {
  const [isLoading, setIsLoading] = useState(false);

  const value: GlobalsProviderValue = useMemo(() => {
    return { isLoading, setIsLoading };
  }, [isLoading]);

  return (
    <GlobalsContext.Provider value={value}>
      {props.children}
    </GlobalsContext.Provider>
  );
};

export default GlobalsProvider;
