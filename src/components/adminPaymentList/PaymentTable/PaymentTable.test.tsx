import { Operation } from "services/administrator/administrator.service.types";
import { render } from "setupTests";

import PaymentTable from "./PaymentTable";

describe("PaymentTable", () => {
  it("renders with default props", () => {
    render(
      <PaymentTable
        data={[]}
        columns={[]}
        onRowClicked={(row: Operation) => console.log(row)}
      />
    );
  });
});
