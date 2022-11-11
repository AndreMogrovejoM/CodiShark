import { TableColumn } from "react-data-table-component";
import { PaginationComponent } from "react-data-table-component/dist/src/DataTable/types";
// Interfaces and types from component Table

// Component Props
export interface TableProps {
  columns: TableColumn<any>[];
  data: any[];
  paginationPerPage: number;
  paginationRowsPerPageOptions: number[];
  paginationComponent?: PaginationComponent;
}

// Styled Component Props
export interface TableStyledProps {}
