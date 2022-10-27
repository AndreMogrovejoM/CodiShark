import React from "react";

import Styles from "./TemplateContainer.styles";
import { TemplateContainerProps as Props } from "./TemplateContainer.types";

const TemplateContainer: React.FC<Props> = (props) => {
  return (
    <Styles className="TemplateContainer">
      TemplateContainer
    </Styles>
  )
};

TemplateContainer.defaultProps = {};

export default TemplateContainer;