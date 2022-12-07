import React from "react";
import { render } from "setupTests";

import Settings from "./Settings";

describe("Settings", () => {
  it("renders with default props", () => {
    render(<Settings />);
  });
});
