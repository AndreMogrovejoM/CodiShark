import React from "react";
import { render } from "setupTests";

import FiveZeroZero from "./500.page";

describe("500 page", () => {
  it("renders without crashing", () => {
    render(<FiveZeroZero />);
  });
});
