import { render } from "setupTests";

import Button from "./Button";

describe("Button", () => {
  const loading = false; // or true

  it("renders with default props", () => {
    render(<Button children={"Hello"} disabled={loading} />);
  });
});
