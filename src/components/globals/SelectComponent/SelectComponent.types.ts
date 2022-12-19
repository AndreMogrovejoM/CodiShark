// Interfaces and types from component SelectComponent

// Component Props
export interface SelectComponentProps {
  labels: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

// Styled Component Props
export interface SelectComponentStyledProps {
  className: string;
}
