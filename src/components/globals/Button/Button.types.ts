// Interfaces and types from component TemplateComponent
type Variant = "text" | "outlined" | "contained";
type Size = "large" | "small" | "medium";
type Type = "button" | "submit" | "reset";
// Component Props
export interface ButtonProps {
  children: string;
  variant?: Variant;
  size?: Size;
  onClick?: (event: any) => void;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  type?: Type;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

// Styled Component Props
export interface ButtonStyledProps {
  className?: string;
}
