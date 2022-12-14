import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from "react";

import { OperationUserDebt } from "./../../services/users/users.service.types";
// Interfaces and types from context Globals

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
  operationUserDebt: OperationUserDebt | undefined;
  setOperationUserDebt: Dispatch<SetStateAction<OperationUserDebt | undefined>>;
}

export type PaymentStatus = "SUCCESS" | "ERROR" | "NONE";
