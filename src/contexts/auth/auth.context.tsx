import React, { createContext } from "react";
import { useMemo, useState } from "react";
import { User } from "types/user.types";

import { AuthProviderProps as Props, SignInStep } from "./auth.context.types";
import { AuthProviderValue } from "./auth.context.types";

// @ts-ignore
export const AuthContext = createContext<AuthProviderValue>();

const AuthProvider: React.FC<Props> = props => {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [signInStep, setSignInStep] = useState<SignInStep>();
  const [user, setUser] = useState<User>();

  const value: AuthProviderValue = useMemo(() => {
    return {
      isAnonymous,
      setIsAnonymous,
      signInStep,
      setSignInStep,
      user,
      setUser
    };
  }, [isAnonymous, signInStep, user]);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
