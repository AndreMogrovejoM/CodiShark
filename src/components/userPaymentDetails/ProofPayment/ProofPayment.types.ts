// Interfaces and types from component ProofPayment

import { UserDebt } from "services/users/users.service.types";

// Component Props
export interface ProofPaymentProps {
  userDebt?: UserDebt;
}

// Styled Component Props
export interface ProofPaymentStyledProps {
  className: string;
}
