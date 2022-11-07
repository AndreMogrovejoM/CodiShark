import React from "react";

import { TextFieldStyled as Styles } from "./TextField.styles";
import { TextFieldProps as Props } from "./TextField.types";

const TextField: React.FC<Props> = props => {
  const { fields, field, config, className } = props;

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
    />
  );
};

TextField.defaultProps = {};

export default TextField;
