import { render } from "setupTests";

import SignInForm from "./SignInForm";

describe("SignInForm", () => {
  it("renders with default props", () => {
    render(<SignInForm />);
  });
});
