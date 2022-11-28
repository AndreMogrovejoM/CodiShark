import { render } from "setupTests";

import UserDetails from "./UserDetails";

describe("UserDetails", () => {
  it("renders with default props", () => {
    render(<UserDetails />);
  });
});
