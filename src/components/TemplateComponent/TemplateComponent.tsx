import React from "react";

import Styles from "./TemplateComponent.styles";
import { TemplateComponentProps as Props } from "./TemplateComponent.types";

const TemplateComponent: React.FC<Props> = props => {
  return (
    <Styles className={`TemplateComponent`}>
      <h2 className="TemplateComponent__title">title</h2>
      <h2 className="TemplateComponent__subtitle">Subtitle</h2>
    </Styles>
  );
};

TemplateComponent.defaultProps = {};

export default TemplateComponent;
