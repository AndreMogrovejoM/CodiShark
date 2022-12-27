import { SetStateAction } from "react";
import { render } from "setupTests";

import PaymentTable from "./PaymentTable";

describe("PaymentTable", () => {
  it("renders with default props", () => {
    render(
      <PaymentTable
        data={[]}
        columns={[]}
        onRowClicked={row => console.log(row)}
        progressPending={true}
        totalRows={0}
        setPage={function (value: SetStateAction<number>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
