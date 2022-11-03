import React from "react";
import { render } from "setupTests";

import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("renders with default props", () => {
    render(<Sidebar />);
  });
});
