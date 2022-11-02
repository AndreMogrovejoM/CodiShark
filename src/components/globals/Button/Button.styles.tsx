import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import variables from "styles/utils/variables";

import { ButtonStyledProps as Props } from "./Button.types";

const { palette } = variables;

export const ButtonStyled = styled(Button)((props: Props) => ({
  borderRadius: "1rem",
  textTransform: "none"
}));
