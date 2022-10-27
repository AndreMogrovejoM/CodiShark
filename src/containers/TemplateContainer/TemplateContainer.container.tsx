import React from "react";

import TemplateContainer from "./TemplateContainer";
import { TemplateContainerContainerProps as Props } from "./TemplateContainer.types";

const TemplateContainerContainer: React.FC<Props> = props => {
  return <TemplateContainer />;
};

TemplateContainerContainer.defaultProps = {};

export default TemplateContainerContainer;
