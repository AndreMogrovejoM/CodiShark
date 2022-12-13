// Interfaces and types from component IziPayForm
import { Dispatch, SetStateAction } from "react";
import { UserDebt } from "services/users/users.service.types";

// Component Props
export interface IziPayFormProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  operationNumber?: string;
  userDebt?: UserDebt;
}

// Styled Component Props
export interface IziPayFormStyledProps {
  className: string;
}
