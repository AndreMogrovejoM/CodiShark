import { Dispatch, SetStateAction } from "react";
import { PaginationComponentProps } from "react-data-table-component";
import { LegendType } from "types/legend.types";

// Component Props
export interface PaginationCustomProps extends PaginationComponentProps {
  totalRows: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  t: LegendType;
}

// Styled Component Props
export interface PaginationCustomStyledProps {
  className: string;
}

export interface NumbersComponentProps {
  key: number;
  value: number;
  className: string;
  onClick: () => void;
}
