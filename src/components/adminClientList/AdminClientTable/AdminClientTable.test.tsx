import { SetStateAction } from "react";
import { render } from "setupTests";

import AdminClientTable from "./AdminClientTable";

describe("AdminClientTable", () => {
  it("renders with default props", () => {
    render(
      <AdminClientTable
        data={[]}
        columns={[]}
        onRowClicked={row => console.log(row)}
        progressPending={true}
        totalRows={0}
        setPage={function (value: SetStateAction<number>): void {
          throw new Error("Function not implemented.");
        }}
        page={0}
      />
    );
  });
});
