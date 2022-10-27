import React, { createContext } from "react";
import { useMemo, useState } from "react";

import { AuthProviderProps as Props } from "./auth.context.types";
import { AuthProviderValue } from "./auth.context.types";

// @ts-ignore
export const AuthContext = createContext<AuthProviderValue>();

const AuthProvider: React.FC<Props> = props => {
  const [isAnonymous, setIsAnonymous] = useState<boolean>();

  const value: AuthProviderValue = useMemo(() => {
    return {
      isAnonymous,
      setIsAnonymous
    };
  }, [isAnonymous]);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
