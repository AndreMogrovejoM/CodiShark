import { render } from "setupTests";

import DebtTable from "./DebtTable";

describe("DebtTable", () => {
  it("renders with default props", () => {
    render(
      <DebtTable
        data={[]}
        columns={[]}
        expandableRows={true}
        progressPending={true}
      />
    );
  });
});
