import Sidebar from "components/globals/Sidebar/Sidebar";
import React from "react";

import { LayoutContainerProps as Props } from "./Layout.container.types";

const LayoutContainer: React.FC<Props> = props => {
  const { children } = props;
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

LayoutContainer.defaultProps = {};

export default LayoutContainer;
