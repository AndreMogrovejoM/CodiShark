import { FieldValues } from "react-hook-form";
import { render } from "setupTests";

import SignInForm from "./SignInForm";

describe("SignInForm", () => {
  const handleForm = (values: FieldValues) => {
    console.log(values);
  };

  it("renders with default props", () => {
    render(<SignInForm handleForm={handleForm} />);
  });
});
