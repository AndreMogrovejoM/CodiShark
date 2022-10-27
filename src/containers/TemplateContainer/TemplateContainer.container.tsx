import React from "react";

import { TemplateContainerContainerProps as Props } from "./TemplateContainer.types";
import TemplateContainer from "./TemplateContainer";

const TemplateContainerContainer: React.FC<Props> = props => {
  return <TemplateContainer />;
};

TemplateContainerContainer.defaultProps = {};

export default TemplateContainerContainer;
