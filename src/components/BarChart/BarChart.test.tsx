import React from "react";
import { render } from "setupTests";

import BarChart from "./BarChart";

describe("BarChart", () => {
  it("renders with default props", () => {
    render(<BarChart />);
  });
});
