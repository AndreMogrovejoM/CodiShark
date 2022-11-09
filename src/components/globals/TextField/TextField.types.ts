import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
// Interfaces and types from component TemplateComponent

type variant = "standard" | "filled" | "outlined";
type size = "small" | "medium";
type margin = "dense" | "normal";

// MUI Component Props
export interface TextField {
  type: string;
  label: string;
  variant?: variant;
  disabled?: boolean;
  size?: size;
  margin?: margin;
  InputProps?: object;
  fullWidth?: boolean;
  focused?: boolean;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  sx?: object;
  maxLength?: number;
  onInput?: () => void;
  autoComplete?: string;
}

// Component Props
export interface TextFieldProps {
  config: TextField;
  field: ControllerRenderProps<any, any>;
  fields: ControllerFieldState;
  className?: string;
  inputProps?: any;
}

// Styled Component Props
export interface TextFieldStyledProps {
  className: string;
}
