// Interfaces and types from component PaymentTable

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

// DataTable
export interface DataRow {
  id: number;
  name: string;
  date: string;
  amount: number | string;
  director: string;
  paymentMethod: string;
  state: boolean;
}

// Component Props
export interface PaymentTableProps {
  // TODO: tipear
  data: any[];
}

// Styled Component Props
export interface PaymentTableStyledProps {}
