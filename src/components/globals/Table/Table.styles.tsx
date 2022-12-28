import CONSTANTS from "config/constants";
import DataTable from "react-data-table-component";
import styled from "styled-components";

import { TableStyledProps as Props } from "./Table.types";

const { BREAKPOINTS } = CONSTANTS;

const TableStyled = styled(DataTable)((props: Props) => ({
  borderRadius: "0.8rem",
  ".rdt_Table": {
    backgroundColor: "var(--palette-whiteBackground)",
    display: `${props.hiddenMobile ? "none" : "block"}`,
    [`@media screen and (min-width: ${BREAKPOINTS.mobile}px)`]: {
      display: "block",
      backgroundColor: "var(--palette-greyBackground)"
    }
  },
  ".rdt_TableCol:focus": {
    outline: "none"
  },
  ".rdt_TableCol_Sortable:focus": {
    outline: "none"
  },
  ".rdt_TableHeadRow": {
    display: `${props.hiddenHeadRow ? "none" : "auto"}`,
    backgroundColor: "var(--palette-greyBackground)",
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: "1.6rem",
    borderRadius: "0.8rem",
    borderBottom: "none",
    marginBottom: "0.4rem",
    height: "4.8rem",
    "& > div:not(div[data-column-id])": {
      display: "none"
    },
    [`@media screen and (min-width: ${BREAKPOINTS.mobile}px)`]: {
      backgroundColor: "var(--palette-whiteBackground)"
    }
  },
  ".rdt_TableRow": {
    borderRadius: "0.8rem",
    borderBottom: "none",
    marginBottom: "0.4rem",
    height: "4.8rem",
    cursor: "auto",
    backgroundColor: "var(--palette-greyBackground)",
    "& > div:has(button[role='button'])": {
      display: "none"
    },
    [`@media screen and (min-width: ${BREAKPOINTS.mobile}px)`]: {
      backgroundColor: "var(--palette-whiteBackground)"
    }
  },
  ".rdt_ExpanderRow": {
    padding: "1.6rem 2.4rem",
    paddingRight: "auto",
    marginTop: "-0.1rem",
    marginBottom: "0.8rem",
    borderRadius: "0.8rem"
  }
}));

export default TableStyled;
