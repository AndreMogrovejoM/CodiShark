import { render } from "setupTests";

import FourZeroFour from "./404.page";

describe("404 page", () => {
  it("renders without crashing", () => {
    render(<FourZeroFour />);
  });
});
