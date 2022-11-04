import React from "react";
import { render } from "setupTests";

import LayoutContainer from "./Layout.container";

describe("Layout container", () => {
  it("renders with default props", () => {
    render(<LayoutContainer children={undefined} />);
  });
});
