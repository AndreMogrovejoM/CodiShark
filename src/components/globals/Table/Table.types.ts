// Interfaces and types from component Table
import { TableColumn } from "react-data-table-component";
import { CSSObject } from "styled-components";

// Theming
type ThemeText = {
  primary: string;
  secondary: string;
  disabled: string;
};

type ThemeBackground = {
  default: string;
};

type ThemeContext = {
  background: string;
  text: string;
};

type ThemeDivider = {
  default: string;
};

type ThemeButton = {
  default: string;
  focus: string;
  hover: string;
  disabled: string;
};

type ThemeSortFocus = {
  default: string;
};

type ThemeSelected = {
  default: string;
  text: string;
};

type ThemeHighlightOnHover = {
  default: string;
  text: string;
};

type ThemeStriped = {
  default: string;
  text: string;
};

// Theme DataTable
export interface Theme {
  text: ThemeText;
  background: ThemeBackground;
  context: ThemeContext;
  divider: ThemeDivider;
  button: ThemeButton;
  sortFocus: ThemeSortFocus;
  selected: ThemeSelected;
  highlightOnHover: ThemeHighlightOnHover;
  striped: ThemeStriped;
}

// Theme Styles
export interface TableStyles {
  style?: CSSObject;
  pageButtonsStyle?: CSSObject;
}

// Component Props
export interface TableProps {
  columns: TableColumn<any>[];
  data: any[];
  paginationComponentOptions: {};
  paginationPerPage: number;
  paginationRowsPerPageOptions: number[];
}

// Styled Component Props
export interface TableStyledProps {}
