import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ButtonStyledProps as Props } from "./Button.types";

export const ButtonStyled = styled(Button)((props: Props) => ({
  borderRadius: "1rem",
  textTransform: "none",
  fontSize: "1.4rem",
  paddingTop: "0.4rem",
  paddingBottom: "0.4rem"
}));
