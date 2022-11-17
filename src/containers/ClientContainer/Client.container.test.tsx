import { render } from "setupTests";

import ClientContainerContainer from "./Client.container";

describe("ClientContainer container", () => {
  it("renders with default props", () => {
    render(<ClientContainerContainer />);
  });
});
