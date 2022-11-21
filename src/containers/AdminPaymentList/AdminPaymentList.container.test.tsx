import { render } from "setupTests";

import AdminPaymentListContainer from "./AdminPaymentList.container";

describe("AdminPaymentListContainer container", () => {
  it("renders with default props", () => {
    render(<AdminPaymentListContainer />);
  });
});
