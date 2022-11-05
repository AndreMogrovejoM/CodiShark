import { CircularProgress } from "@mui/material";
import React, { forwardRef, PropsWithChildren } from "react";

import { ButtonStyled as Styles } from "./Button.styles";
import { ButtonProps as Props } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (props, ref) => {
    const { children } = props;

    return (
      <Styles
        {...props}
        ref={ref}
        startIcon={
          props?.disabled ? <CircularProgress size={12} /> : props?.startIcon
        }
      >
        {props?.disabled ? "Cargando..." : children}
      </Styles>
    );
  }
);

export default Button;
