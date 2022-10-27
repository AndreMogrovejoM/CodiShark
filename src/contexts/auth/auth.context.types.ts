// Interfaces and types from context Auth

import { Dispatch, SetStateAction } from "react";

// Provider Props
export interface AuthProviderProps {
  children: React.ReactNode;
}

// Provider value
export interface AuthProviderValue {
  isAnonymous: boolean | undefined;
  setIsAnonymous: Dispatch<SetStateAction<boolean | undefined>>;
}
