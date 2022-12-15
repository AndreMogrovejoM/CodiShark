import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from "react";
import { Operation } from "services/administrator/administrator.service.types";

import { OperationUserDebt } from "./../../services/users/users.service.types";
// Interfaces and types from context Globals

// Provider Props
export interface GlobalsProviderProps {
  children: ReactNode;
}

export type OperationType = OperationUserDebt | Operation | undefined;

// Provider value
export interface GlobalsProviderValue {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  selectedIndex: MutableRefObject<number>;
  paymentStatus: PaymentStatus;
  setPaymentStatus: Dispatch<SetStateAction<PaymentStatus>>;
  operationUserDebt: OperationType;
  setOperationUserDebt: Dispatch<SetStateAction<OperationType>>;
  currentDebtId: MutableRefObject<number | undefined>;
}

export type PaymentStatus = "SUCCESS" | "ERROR" | "NONE";
