import { render } from "setupTests";

import AdminPaymentListContainer from "./UserPaymentList.container";

describe("AdminPaymentListContainer container", () => {
  it("renders with default props", () => {
    render(<AdminPaymentListContainer />);
  });
});
