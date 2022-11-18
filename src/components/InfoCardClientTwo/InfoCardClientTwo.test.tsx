import { render } from "setupTests";

import InfoCardClientTwo from "./InfoCardClientTwo";

describe("InfoCardClientTwo", () => {
  it("renders with default props", () => {
    render(<InfoCardClientTwo title={""} value={""} />);
  });
});
