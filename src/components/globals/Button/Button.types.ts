// Interfaces and types from component TemplateComponent

type Color =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

// Component Props
export interface ButtonProps {
  children: string;
  color?: Color;
  variant?: "text" | "outlined" | "contained";
  size?: "large" | "small" | "medium";
  onClick?: (event: any) => void;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  disabled: boolean;
}

// Styled Component Props
export interface ButtonStyledProps {
  className?: string;
  color?: Color;
}
