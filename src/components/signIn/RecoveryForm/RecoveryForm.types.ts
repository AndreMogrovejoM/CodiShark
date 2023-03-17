// Interfaces and types from component RecoveryForm

import { Dispatch, SetStateAction } from "react";

// Component Props
export interface RecoveryFormProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

// Styled Component Props
export interface RecoveryFormStyledProps {
  className: string;
}
