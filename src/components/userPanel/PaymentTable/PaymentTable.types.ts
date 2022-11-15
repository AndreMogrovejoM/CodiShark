// Interfaces and types from component PaymentTable

import { TableColumn } from "react-data-table-component";

export interface NumbersComponentProps {
  key: number;
  value: number;
  className: string;
  onClick: () => void;
}

export interface RowProps {
  content: string;
  bold: boolean;
}

export interface RowChipProps {
  conditional: boolean;
}

export interface PaginationInterface {
  rowsPerPage: number;
  rowCount: number;
  currentPage: number;
  onChangePage: (page: number) => void;
  onChangeRowsPerPage: (numRows: number, currentPage: number) => void;
}

// Component Props
export interface PaymentTableProps {
  data: any[];
  columns: TableColumn<any>[];
}

// Styled Component Props
export interface PaymentTableStyledProps {}
