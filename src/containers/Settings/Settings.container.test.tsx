import { render } from "setupTests";

import SettingsContainer from "./Settings.container";

describe("SettingsContainer container", () => {
  it("renders with default props", () => {
    render(<SettingsContainer />);
  });
});
