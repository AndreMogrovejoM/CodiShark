// Interfaces and types from component OperationNumberModal

import { Dispatch, SetStateAction } from "react";
import { UserDebt } from "services/users/users.service.types";

// Component Props
export interface OperationNumberModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  operationNumber?: string;
  userDebt?: UserDebt;
}

// Styled Component Props
export interface OperationNumberModalStyledProps {
  className: string;
}
