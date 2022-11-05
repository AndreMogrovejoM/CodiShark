import Sidebar from "components/globals/Sidebar/Sidebar";
import React from "react";

import Styles from "./Layout.container.styles";
import { LayoutContainerProps as Props } from "./Layout.container.types";

const LayoutContainer: React.FC<Props> = props => {
  const { children } = props;
  return (
    <Styles className="LayoutContainer">
      <Sidebar />
      <main className="LayoutContainer__children">{children}</main>
    </Styles>
  );
};

LayoutContainer.defaultProps = {};

export default LayoutContainer;
