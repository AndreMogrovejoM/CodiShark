// Interfaces and types from component OperationNumberModal

import { Dispatch, SetStateAction } from "react";

// Component Props
export interface OperationNumberModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

// Styled Component Props
export interface OperationNumberModalStyledProps {
  className: string;
}
