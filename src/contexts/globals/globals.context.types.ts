// Interfaces and types from context Globals
import { ReactNode } from "react";

// Provider Props
export interface GlobalsProviderProps {
  children: ReactNode;
}

// Provider value
export interface GlobalsProviderValue {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
