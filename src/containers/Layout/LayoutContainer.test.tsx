import { render } from "setupTests";

import LayoutContainer from "./LayoutContainer";

describe("LayoutContainer", () => {
  const component = <p>Hello World</p>;

  it("renders with default props", () => {
    render(<LayoutContainer children={component} />);
  });
});
