import { TextField } from "@mui/material";
import BG_ICON from "assets/images/calendarIcon.webp";
import styled from "styled-components";

export const TextFieldStyled = styled(TextField)(() => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: "1.2rem 1.6rem",
    fontSize: "1.2rem",
    "&::-webkit-outer-spin-button": {
      display: "none"
    },
    "&::-webkit-inner-spin-button": {
      display: "none"
    },
    "&::-webkit-calendar-picker-indicator": {
      fontSize: "1.6rem",
      background: `url(${BG_ICON}) no-repeat`
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
