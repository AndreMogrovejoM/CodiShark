import { render } from "setupTests";

import UserOperationsPanelContainer from "./UserOperationsPanel.container";

describe("TemplateContainer container", () => {
  it("renders with default props", () => {
    render(<UserOperationsPanelContainer />);
  });
});
