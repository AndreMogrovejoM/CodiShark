import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

// Interfaces and types from component TemplateComponent

// MUI Component Props
export interface TextField {
  type: string;
  label: string;
  variant?: "standard" | "filled" | "outlined";
  disabled?: boolean;
  size?: "small" | "medium";
  margin?: "dense" | "normal";
  InputProps?: any;
  fullWidth?: boolean;
  focused?: boolean;
}

// Component Props
export interface TextFieldProps {
  config: TextField;
  field: ControllerRenderProps<any, any>;
  fields: ControllerFieldState;
}

// Styled Component Props
export interface TextFieldStyledProps {
  className: string;
}
