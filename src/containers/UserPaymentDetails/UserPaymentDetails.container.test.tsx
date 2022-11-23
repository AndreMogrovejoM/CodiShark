import { render } from "setupTests";

import UserPaymentDetailsContainer from "./UserPaymentDetails.container";

describe("UserPaymentDetailsContainer container", () => {
  it("renders with default props", () => {
    render(<UserPaymentDetailsContainer />);
  });
});
