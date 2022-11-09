import { render } from "setupTests";

import InfoPanelBanner from "./InfoPanelBanner";

describe("InfoPanelBanner", () => {
  it("renders with default props", () => {
    render(<InfoPanelBanner value={0} subtitle={""} />);
  });
});
