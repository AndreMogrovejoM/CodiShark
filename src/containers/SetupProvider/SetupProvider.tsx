import React from "react";

import { SetupProviderProps as Props } from "./SetupProvider.types";

const SetupProvider: React.FC<Props> = props => {
  return <>{props.children}</>;
};

SetupProvider.defaultProps = {};

export default SetupProvider;
