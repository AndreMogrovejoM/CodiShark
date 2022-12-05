import Settings from "components/Settings/Settings";
import LayoutContainer from "containers/Layout/Layout.container";
import React from "react";

import { SettingsContainerProps as Props } from "./Settings.types";

const SettingsContainer: React.FC<Props> = props => {
  return (
    <LayoutContainer>
      <Settings />
    </LayoutContainer>
  );
};

SettingsContainer.defaultProps = {};

export default SettingsContainer;
