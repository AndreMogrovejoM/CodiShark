import { render } from "setupTests";

import AdminPaymentListView from "./AdminPaymentListView";

describe("PaymentListView", () => {
  it("renders with default props", () => {
    render(<AdminPaymentListView />);
  });
});
