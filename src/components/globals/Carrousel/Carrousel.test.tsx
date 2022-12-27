import { render } from "setupTests";

import Carrousel from "./Carrousel";

describe("Carrousel", () => {
  it("renders with default props", () => {
    render(<Carrousel images={[]} />);
  });
});
