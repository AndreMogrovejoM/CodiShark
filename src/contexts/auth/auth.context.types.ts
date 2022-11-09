// Interfaces and types from context Auth

import { Dispatch, SetStateAction } from "react";
import { SignInMethod } from "services/auth/auth.service.types";
import { User } from "types/user.types";

export type SignInStep = 0 | 1 | 2;

// Provider Props
export interface AuthProviderProps {
  children: React.ReactNode;
}

// Provider value
export interface AuthProviderValue {
  isAnonymous: boolean;
  signInStep?: SignInStep;
  setSignInStep: Dispatch<SetStateAction<SignInStep | undefined>>;
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  signInMethod: SignInMethod;
  setSignInMethod: React.Dispatch<React.SetStateAction<SignInMethod>>;
}
