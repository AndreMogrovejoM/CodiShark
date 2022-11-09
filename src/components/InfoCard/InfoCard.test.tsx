import { render } from "setupTests";

import InfoCard from "./InfoCard";

describe("InfoCard", () => {
  it("renders with default props", () => {
    render(<InfoCard title={""} value={""} />);
  });
});
