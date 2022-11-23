import React from "react";
import { render } from "setupTests";

import Backdrop from "./Backdrop";

describe("Backdrop", () => {
  it("renders with default props", () => {
    render(<Backdrop isLoading={false} />);
  });
});
