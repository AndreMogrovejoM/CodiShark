// Interfaces and types from component TemplateComponent
type Variant = "text" | "outlined" | "contained";
type Size = "large" | "small" | "medium";
type Type = "button" | "submit" | "reset";
type Color =
  | "inherit"
  | "error"
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning";

// Component Props
export interface ButtonProps {
  children: string;
  color?: Color;
  variant?: Variant;
  size?: Size;
  onClick?: (event: any) => void;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  type?: Type;
  fullWidth?: boolean;
  disabled?: boolean;
}

// Styled Component Props
export interface ButtonStyledProps {
  className?: string;
}
