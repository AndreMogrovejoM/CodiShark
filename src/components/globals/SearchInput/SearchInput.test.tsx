import { render } from "setupTests";

import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  it("renders with default props", () => {
    render(
      <SearchInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e);
        }}
      />
    );
  });
});
