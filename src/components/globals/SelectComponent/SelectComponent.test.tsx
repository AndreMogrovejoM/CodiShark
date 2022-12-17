import { render } from "setupTests";

import SelectComponent from "./SelectComponent";

describe("SelectComponent", () => {
  it("renders with default props", () => {
    render(
      <SelectComponent
        labels={["1", "2"]}
        onChange={e => {
          console.log(e);
        }}
      />
    );
  });
});
