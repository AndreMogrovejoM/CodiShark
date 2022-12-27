import React from "react";
import { render } from "setupTests";

import PaginationCustom from "./PaginationCustom";

describe("PaginationCustom", () => {
  it("renders with default props", () => {
    render(
      <PaginationCustom
        rowsPerPage={0}
        rowCount={0}
        currentPage={0}
        onChangePage={function (page: number): void {
          throw new Error("Function not implemented.");
        }}
        onChangeRowsPerPage={function (
          numRows: number,
          currentPage: number
        ): void {
          throw new Error("Function not implemented.");
        }}
        totalRows={0}
        setPage={function (value: React.SetStateAction<number>): void {
          throw new Error("Function not implemented.");
        }}
        page={0}
      />
    );
  });
});
