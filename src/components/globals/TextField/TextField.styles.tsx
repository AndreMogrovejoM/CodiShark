import { TextField } from "@mui/material";
import styled from "styled-components";
import variables from "styles/utils/variables";

import { TextFieldStyledProps as Props } from "./TextField.types";

const { palette } = variables;

export const TextFieldStyled = styled(TextField)(() => ({
  width: "100%",
  "& .MuiInputBase-input": {
    /* fontFamily: `${fonts["Poppins-Rg"]}` */
    padding: "1.2rem 1.6rem"
  },
  ".MuiFormLabel-root": {
    /* fontFamily: `${fonts["Poppins-Md"]}`, */
    color: `${palette.darkText}`,
    "&:after": {
      color: `${palette.darkText}`
    },
    ".Mui-focused": {
      color: `${palette.darkText}`
    },
    ".Mui-activated": {
      color: `${palette.darkText}`
    }
  },
  ".MuiFormHelperText-root": {
    /* fontFamily: `${fonts["Poppins-Rg"]}` */
  },
  ".MuiOutlinedInput-root": {
    borderRadius: "1rem",

    borderWidth: "1px",
    "& fieldset": {
      border: `1px solid ${palette.skyBlue}`
    },
    "&:hover fieldset": {
      border: `1px solid ${palette.skyBlue}`
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${palette.skyBlue}`
    }
  }
}));
