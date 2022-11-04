import { Controller, useForm } from "react-hook-form";
import { render } from "setupTests";

import TextField from "./TextField";

describe("TextField", () => {
  it("renders with default props", () => {
    // error use to useForm()
    const control = useForm().control;

    const name = {
      type: "text",
      label: "Name",
      name: "name",
      rules: {
        required: "Field required"
      }
    };

    render(
      <Controller
        name={name.name}
        control={control}
        rules={name.rules}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            field={field}
            fields={fieldState}
            config={{
              type: name.type,
              label: name.label
            }}
          />
        )}
      />
    );
  });
});
