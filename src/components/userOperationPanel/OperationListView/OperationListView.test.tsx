import { render } from "setupTests";

import OperationListView from "./OperationListView";

describe("PaymentListView", () => {
  it("renders with default props", () => {
    render(<OperationListView />);
  });
});
