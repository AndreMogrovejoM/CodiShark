import { render } from "setupTests";

import Layout from "./Layout.container";

describe("Layout container", () => {
  const component = <p>Hello World</p>;

  it("renders with default props", () => {
    render(<Layout children={component} />);
  });
});
