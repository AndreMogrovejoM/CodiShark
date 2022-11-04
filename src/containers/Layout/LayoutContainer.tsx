import React from "react";

import Styles from "./LayoutContainer.styles";
import { LayoutContainerProps as Props } from "./LayoutContainer.types";

const LayoutContainer: React.FC<Props> = props => {
  return <Styles className="LayoutContainer"></Styles>;
};

LayoutContainer.defaultProps = {};

export default LayoutContainer;
