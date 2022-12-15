import { render } from "setupTests";

import AdminPaymentListContainer from "./AdminPaymentList.container";

describe("AdminPaymentList container", () => {
  it("renders with default props", () => {
    render(<AdminPaymentListContainer />);
  });
});
