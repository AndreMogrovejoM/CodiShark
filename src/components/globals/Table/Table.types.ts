// Interfaces and types from component Table
import { TableColumn } from "react-data-table-component";
import { PaginationComponent } from "react-data-table-component/dist/src/DataTable/types";

// Component Props
export interface TableProps {
  columns: TableColumn<any>[];
  // TODO: tipear desacuerdo a la respuesta de back
  data: any[];
  paginationPerPage: number;
  paginationRowsPerPageOptions: number[];
  paginationComponent?: PaginationComponent;
}

// Styled Component Props
export interface TableStyledProps {}
