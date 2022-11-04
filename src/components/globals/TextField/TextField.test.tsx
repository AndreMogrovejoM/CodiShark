import { Controller } from "react-hook-form";
import { render } from "setupTests";

import TextField from "./TextField";

describe("TextField", () => {
  it("renders with default props", () => {
    render(
      <Controller
        name="text"
        rules={{ required: "Field required" }}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            field={field}
            fields={fieldState}
            config={{
              type: "text",
              label: "Name"
            }}
          />
        )}
      />
    );
  });
});
