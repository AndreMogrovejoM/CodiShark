import { Backdrop as MuiBackDrop, CircularProgress } from "@mui/material";
import React from "react";

import { BackdropProps as Props } from "./Backdrop.types";

const Backdrop: React.FC<Props> = props => {
  const { isLoading } = props;
  return (
    <MuiBackDrop
      sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="primary" />
    </MuiBackDrop>
  );
};

Backdrop.defaultProps = {};

export default Backdrop;
