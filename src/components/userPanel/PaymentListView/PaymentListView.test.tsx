import { render } from "setupTests";

import PaymentListView from "./PaymentListView";

describe("PaymentListView", () => {
  it("renders with default props", () => {
    render(<PaymentListView />);
  });
});
