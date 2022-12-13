import React from "react";
import { render } from "setupTests";

import IziPayForm from "./IziPayForm";

describe("IziPayForm", () => {
  it("renders with default props", () => {
    render(
      <IziPayForm
        open={false}
        setOpen={function (value: React.SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
