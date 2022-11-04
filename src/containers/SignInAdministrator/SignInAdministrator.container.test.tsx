import React from "react";
import { render } from "setupTests";

import SignInAdministratorContainer from "./SignInAdministrator.container";

describe("SignInAdministrator container", () => {
  it("renders with default props", () => {
    render(<SignInAdministratorContainer />);
  });
});
