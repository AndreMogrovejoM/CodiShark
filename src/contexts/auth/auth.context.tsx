import React, { createContext, useEffect } from "react";
import { useMemo, useState } from "react";
import { SignInMethod } from "services/auth/auth.service.types";
import { User } from "types/user.types";
import { useLocalStorage } from "utils/useLocalStorage";

import { AuthProviderProps as Props, SignInStep } from "./auth.context.types";
import { AuthProviderValue } from "./auth.context.types";

// @ts-ignore
export const AuthContext = createContext<AuthProviderValue>();

const AuthProvider: React.FC<Props> = props => {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [signInStep, setSignInStep] = useState<SignInStep>();
  const [user, setUser] = useState<User>();
  const [signInMethod, setSignInMethod] = useState<SignInMethod>("SMS");
  const [localUser] = useLocalStorage("user");

  useEffect(() => {
    if (user?.id) {
      setIsAnonymous(false);
    } else {
      setIsAnonymous(true);
    }
  }, [user]);

  useEffect(() => {
    if (localUser) {
      setUser(localUser);
    }
  }, [localUser]);

  const value: AuthProviderValue = useMemo(() => {
    return {
      isAnonymous,
      signInStep,
      setSignInStep,
      user,
      setUser,
      signInMethod,
      setSignInMethod
    };
  }, [isAnonymous, signInMethod, signInStep, user]);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
