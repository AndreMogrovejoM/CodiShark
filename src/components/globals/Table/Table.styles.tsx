import DataTable from "react-data-table-component";
import styled from "styled-components";

import { TableStyledProps as Props } from "./Table.types";

const TableStyled = styled(DataTable)((props: Props) => ({
  ".rdt_Table": {
    backgroundColor: "var(--palette-greyBackground)"
  },
  ".rdt_TableHeadRow": {
    backgroundColor: "var(--palette-whiteBackground)",
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: "1.6rem",
    borderRadius: "0.8rem",
    borderBottom: "none",
    marginBottom: "0.4rem"
  },
  ".rdt_TableRow": {
    borderRadius: "0.8rem",
    borderBottom: "none",
    marginBottom: "0.4rem"
  }
}));

export default TableStyled;
