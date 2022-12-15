import { render } from "setupTests";

import UserPaymentListView from "./UserPaymentListView";

describe("UserPaymentListView", () => {
  it("renders with default props", () => {
    render(<UserPaymentListView />);
  });
});
