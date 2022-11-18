import { render } from "setupTests";

import InfoCardClientOne from "./InfoCardClientOne";

describe("InfoCardClientOne", () => {
  it("renders with default props", () => {
    render(<InfoCardClientOne name={""} dni={""} />);
  });
});
