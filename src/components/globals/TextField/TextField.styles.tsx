import { TextField } from "@mui/material";
import styled from "styled-components";

import { TextFieldStyledProps as Props } from "./TextField.types";

export const TextFieldStyled = styled(TextField)(() => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: "1.2rem 1.6rem",
    "&::-webkit-outer-spin-button": {
      display: "none"
    },
    "&::-webkit-inner-spin-button": {
      display: "none"
    }
  },
  ".MuiFormLabel-root": {
    color: "var(--palette-darkText)",
    "&:after": {
      color: "var(--palette-darkText)"
    },
    ".Mui-focused": {
      color: "var(--palette-darkText)"
    },
    ".Mui-activated": {
      color: "var(--palette-darkText)"
    }
  },
  ".MuiOutlinedInput-root": {
    borderRadius: "1rem",

    borderWidth: "1px",
    "& fieldset": {
      border: `1px solid var(--palette-skyBlue)`
    },
    "&:hover fieldset": {
      border: `1px solid var(--palette-skyBlue)`
    },
    "&.Mui-focused fieldset": {
      border: `1px solid var(--palette-skyBlue)`
    }
  }
}));
