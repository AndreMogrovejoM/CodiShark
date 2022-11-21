import { render } from "setupTests";

import PaymentListView from "./AdminPaymentListView";

describe("PaymentListView", () => {
  it("renders with default props", () => {
    render(<PaymentListView />);
  });
});
