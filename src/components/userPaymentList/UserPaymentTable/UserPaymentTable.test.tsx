import { SetStateAction } from "react";
import { render } from "setupTests";

import PaymentTable from "./UserPaymentTable";

describe("PaymentTable", () => {
  it("renders with default props", () => {
    render(
      <PaymentTable
        data={[]}
        columns={[]}
        expandableRows={true}
        expandOnRowClicked={true}
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
