import { render } from "setupTests";

import ClientPayment from "./ClientPayment";

describe("ClientPayment", () => {
  it("renders with default props", () => {
    render(<ClientPayment title={""} subtitle={""} />);
  });
});
