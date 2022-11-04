import React from "react";

import LayoutContainer from "./LayoutContainer";
import { LayoutContainerProps as Props } from "./LayoutContainer.types";

const Layout: React.FC<Props> = props => {
  const { children } = props;

  return <LayoutContainer> {children} </LayoutContainer>;
};

Layout.defaultProps = {};

export default Layout;
