import DataTable from "react-data-table-component";
import styled from "styled-components";

import { TableStyledProps as Props } from "./Table.types";

const TableStyled = styled(DataTable)((props: Props) => ({
  ".rdt_Table": {
    backgroundColor: "var(--palette-greyBackground)"
  },
  ".rdt_TableHeadRow": {
    display: `${props.hiddenHeadRow ? "none" : "auto"}`,
    backgroundColor: "var(--palette-whiteBackground)",
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: "1.6rem",
    borderRadius: "0.8rem",
    borderBottom: "none",
    marginBottom: "0.4rem",
    height: "4.8rem",
    "& > div:not(div[data-column-id])": {
      display: "none"
    }
  },
  ".rdt_TableRow": {
    borderRadius: "0.8rem",
    borderBottom: "none",
    marginBottom: "0.4rem",
    height: "4.8rem",
    cursor: "auto",
    "& > div:has(button[role='button'])": {
      display: "none"
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
