import { SetStateAction } from "react";
import { Operation } from "services/administrator/administrator.service.types";
import { render } from "setupTests";

import AdminPaymentTable from "./AdminPaymentTable";

describe("AdminPaymentTable", () => {
  it("renders with default props", () => {
    render(
      <AdminPaymentTable
        data={[]}
        columns={[]}
        onRowClicked={(row: Operation) => console.log(row)}
        totalRows={0}
        setPage={function (value: SetStateAction<number>): void {
          throw new Error("Function not implemented.");
        }}
        page={0}
      />
    );
  });
});
