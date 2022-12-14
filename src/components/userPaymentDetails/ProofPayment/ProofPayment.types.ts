// Interfaces and types from component ProofPayment

import { OperationUserDebt } from "services/users/users.service.types";

// Component Props
export interface ProofPaymentProps {
  userDebt?: OperationUserDebt;
  isLoading: boolean;
}

// Styled Component Props
export interface ProofPaymentStyledProps {
  className: string;
}
