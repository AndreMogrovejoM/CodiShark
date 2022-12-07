import React from "react";
import { render } from "setupTests";

import OperationNumberModal from "./OperationNumberModal";

describe("OperationNumberModal", () => {
  it("renders with default props", () => {
    render(
      <OperationNumberModal
        open={false}
        setOpen={function (value: React.SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
