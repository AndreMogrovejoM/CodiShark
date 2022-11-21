import { TableColumn } from "react-data-table-component";
import { ExpandableRowsComponent } from "react-data-table-component/dist/src/DataTable/types";
import { PaginationComponent } from "react-data-table-component/dist/src/DataTable/types";
// Interfaces and types from component Table

// Component Props
export interface TableProps {
  columns: TableColumn<any>[];
  // TODO: tipear desacuerdo a la respuesta de back
  data: any[];
  paginationPerPage: number;
  paginationRowsPerPageOptions: number[];
  paginationComponent?: PaginationComponent;
  expandableRows?: boolean;
  expandableRowsComponent?: ExpandableRowsComponent<any>;
  expandOnRowClicked?: boolean;
}

// Styled Component Props
export interface TableStyledProps {}
