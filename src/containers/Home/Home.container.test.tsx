import React from "react";
import { render } from "setupTests";

import HomeContainer from "./Home.container";

describe("Home container", () => {
  it("renders with default props", () => {
    render(<HomeContainer />);
  });
});
