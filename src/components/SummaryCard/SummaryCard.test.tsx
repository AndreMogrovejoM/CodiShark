import { render } from "setupTests";

import SummaryCard from "./SummaryCard";

describe("SummaryCard", () => {
  it("renders with default props", () => {
    render(<SummaryCard title={""} value={""} />);
  });
});
