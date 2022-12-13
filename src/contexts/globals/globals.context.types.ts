// Interfaces and types from context Globals
import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from "react";

// Provider Props
export interface GlobalsProviderProps {
  children: ReactNode;
}

// Provider value
export interface GlobalsProviderValue {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  selectedIndex: MutableRefObject<number>;
  paymentStatus: PaymentStatus;
  setPaymentStatus: Dispatch<SetStateAction<PaymentStatus>>;
}

export type PaymentStatus = "SUCCESS" | "ERROR" | "NONE";
