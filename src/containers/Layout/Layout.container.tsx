import { Backdrop, CircularProgress } from "@mui/material";
import Sidebar from "components/globals/Sidebar/Sidebar";
import useGlobals from "contexts/globals/globals.hooks";
import React from "react";

import Styles from "./Layout.container.styles";
import { LayoutContainerProps as Props } from "./Layout.container.types";

const LayoutContainer: React.FC<Props> = props => {
  const { children } = props;
  const { isLoading } = useGlobals();

  return (
    <Styles className="LayoutContainer">
      <Sidebar />
      <main className="LayoutContainer__children">{children}</main>
      <Backdrop
        sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </Styles>
  );
};

LayoutContainer.defaultProps = {};

export default LayoutContainer;
