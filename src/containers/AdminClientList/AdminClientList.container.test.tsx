import { render } from "setupTests";

import AdminClientListContainer from "./AdminClientList.container";

describe("AdminClientListContainer container", () => {
  it("renders with default props", () => {
    render(<AdminClientListContainer />);
  });
});
