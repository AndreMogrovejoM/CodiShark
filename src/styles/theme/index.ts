import { createTheme } from "@mui/material";
import variables from "styles/utils/variables";

import dark from "./dark";
import light from "./light";

const { palette } = variables;

const themes = {
  light,
  dark
};

export const theme = createTheme({
  palette: {
    primary: {
      main: palette.primary
    },
    secondary: {
      main: palette.secondary
    },
    info: {
      main: palette.blue
    }
  }
});

export default themes;
