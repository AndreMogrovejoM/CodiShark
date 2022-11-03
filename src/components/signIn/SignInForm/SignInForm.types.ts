import { FieldValues } from "react-hook-form";

// Interfaces and types from component SignInForm

// Component Props
export interface SignInFormProps {
  handleForm: (values: FieldValues) => void;
}

// Styled Component Props
export interface SignInFormStyledProps {
  className: string;
}

export interface SignInFormValues {
  email: string;
  password: string;
}
