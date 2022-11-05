import { CircularProgress } from "@mui/material";
import useI18n from "i18n/i18n.hooks";
import React, { forwardRef, PropsWithChildren } from "react";

import { ButtonStyled as Styles } from "./Button.styles";
import { ButtonProps as Props } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (props, ref) => {
    const { children } = props;

    const t = useI18n().global.button;

    return (
      <Styles
        {...props}
        ref={ref}
        startIcon={
          props?.disabled ? <CircularProgress size={12} /> : props?.startIcon
        }
      >
        {props?.disabled ? t.text : children}
      </Styles>
    );
  }
);

export default Button;
