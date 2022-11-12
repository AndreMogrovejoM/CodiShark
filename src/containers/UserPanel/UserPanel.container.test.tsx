import { render } from "setupTests";

import UserPanelContainer from "./UserPanel.container";

describe("UserPanelContainer container", () => {
  it("renders with default props", () => {
    render(<UserPanelContainer />);
  });
});
