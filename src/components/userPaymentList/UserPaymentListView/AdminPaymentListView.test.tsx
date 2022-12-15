import { render } from "setupTests";

import PaymentListView from "./UserPaymentListView";

describe("PaymentListView", () => {
  it("renders with default props", () => {
    render(<PaymentListView />);
  });
});
