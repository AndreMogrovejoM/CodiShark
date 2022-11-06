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
