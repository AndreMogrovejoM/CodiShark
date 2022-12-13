// Interfaces and types from component SkeletonComponent

type Animation = "pulse" | "wave" | false;
type Variant = "circular" | "rectangular" | "rounded" | "text";

// Component Props
export interface SkeletonComponentProps {
  width?: number | string;
  height: number | string;
  animation?: Animation;
  variant?: Variant;
}

// Styled Component Props
export interface SkeletonComponentStyledProps {
  className: string;
}
