import { render } from "setupTests";

import SwipperComponent from "./SwipperComponent";

describe("SwipperComponent", () => {
  it("renders with default props", () => {
    render(<SwipperComponent children={undefined} />);
  });
});
