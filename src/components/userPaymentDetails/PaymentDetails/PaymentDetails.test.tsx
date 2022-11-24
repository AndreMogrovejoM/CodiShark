import { render } from "setupTests";

import PaymentDetails from "./PaymentDetails";

describe("PaymentDetails", () => {
  it("renders with default props", () => {
    render(<PaymentDetails />);
  });
});
