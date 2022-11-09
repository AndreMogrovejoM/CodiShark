import React from "react";

import { TextFieldStyled as Styles } from "./TextField.styles";
import { TextFieldProps as Props } from "./TextField.types";

const TextField: React.FC<Props> = props => {
  const { fields, field, config, className } = props;

  // Limit numbers in the input type "number"
  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (config.maxLength) {
      const value = e.target.value;
      e.target.value = value.substring(0, config.maxLength);
    }
  };

  return (
    <Styles
      {...field}
      error={fields.invalid}
      helperText={fields.error?.message}
      type={config.type}
      label={config.label}
      variant={config.variant}
      size={config.size}
      margin={config.margin}
      fullWidth={config.fullWidth}
      focused={config.focused}
      InputProps={config.InputProps}
      sx={config.sx}
      className={className}
      inputProps={{ maxLength: config.maxLength }}
      onInput={handleNumber}
      autoComplete="off"
    />
  );
};

TextField.defaultProps = {};

export default TextField;
