import React from "react";

import Styles from "./AdministratorPanel.styles";
import { AdministratorPanelProps as Props } from "./AdministratorPanel.types";

const AdministratorPanel: React.FC<Props> = props => {
  return <Styles className="AdministratorPanel">AdministratorPanel</Styles>;
};

AdministratorPanel.defaultProps = {};

export default AdministratorPanel;
