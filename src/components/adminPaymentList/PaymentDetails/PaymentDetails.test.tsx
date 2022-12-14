import { render } from "setupTests";

import OperationDetails from "./PaymentDetails";

describe("OperationDetails", () => {
  it("renders with default props", () => {
    render(<OperationDetails data={undefined} />);
  });
});
