import { TableColumn } from "react-data-table-component";
import { ExpandableRowsComponent } from "react-data-table-component/dist/src/DataTable/types";
import { UserDebt } from "services/users/users.service.types";

export interface NumbersComponentProps {
  key: number;
  value: number;
  className: string;
  onClick: () => void;
}

export interface RowProps {
  content: string | number;
  isDate?: boolean;
}

export interface RowMiddleProps {
  price: number;
  discount: number;
}

export interface ButtonExpanderProps {
  expand?: boolean;
}

export interface PaginationInterface {
  rowsPerPage: number;
  rowCount: number;
  currentPage: number;
  onChangePage: (page: number) => void;
  onChangeRowsPerPage: (numRows: number, currentPage: number) => void;
}

// Component Props
export interface DebtTableProps {
  data: UserDebt[];
  columns: TableColumn<UserDebt>[];
  expandableRows: boolean;
  expandableRowsComponent?: ExpandableRowsComponent<UserDebt>;
  expandOnRowClicked?: boolean;
  expandableRowExpanded?: (row: UserDebt) => void;
  progressPending: boolean;
}

// Styled Component Props
export interface DebtTableStyledProps {}
