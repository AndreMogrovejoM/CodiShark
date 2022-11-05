import React from "react";
import { render } from "setupTests";

import LastProcessCard from "./LastProcessCard";

describe("LastProcessCard", () => {
  it("renders with default props", () => {
    render(<LastProcessCard title="title" />);
  });
});
