import { render } from "setupTests";

import AdministratorPanelContainer from "./AdministratorPanel.container";

describe("AdministratorPanel container", () => {
  it("renders with default props", () => {
    render(<AdministratorPanelContainer />);
  });
});
