import { render } from "setupTests";

import Table from "./Table";

describe("Table", () => {
  it("renders with default props", () => {
    render(
      <Table
        columns={[]}
        data={[]}
        paginationPerPage={0}
        paginationRowsPerPageOptions={[]}
      />
    );
  });
});
