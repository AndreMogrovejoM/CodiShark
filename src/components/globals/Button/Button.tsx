import React, { forwardRef, PropsWithChildren } from "react";

import { ButtonStyled as Styles } from "./Button.styles";
import { ButtonProps as Props } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (props, ref) => {
    const { children } = props;

    return (
      <Styles {...props} ref={ref}>
        {children}
      </Styles>
    );
  }
);

Button.defaultProps = {
  color: "primary"
};

export default Button;
