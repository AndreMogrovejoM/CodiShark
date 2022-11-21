import { render } from "setupTests";

import PaymentTable from "./PaymentTable";

describe("PaymentTable", () => {
  it("renders with default props", () => {
    render(
      <PaymentTable
        data={[]}
        columns={[]}
        expandableRows={true}
        expandOnRowClicked={true}
      />
    );
  });
});
