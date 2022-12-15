import { render } from "setupTests";

import OperationDetails from "./OperationDetails";

describe("OperationDetails", () => {
  it("renders with default props", () => {
    render(<OperationDetails data={undefined} />);
  });
});
