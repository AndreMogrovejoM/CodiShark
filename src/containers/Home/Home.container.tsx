import AdministratorPanelContainer from "containers/AdministratorPanel/AdministratorPanel.container";
import ClientContainerContainer from "containers/ClientContainer/Client.container";
import useAuth from "contexts/auth/auth.hooks";
import FiveZeroZero from "pages/500/500.page";
import React from "react";

import { HomeContainerProps as Props } from "./Home.container.types";

const HomeContainer: React.FC<Props> = props => {
  const { user } = useAuth();
  const { rol } = user ?? {};
  if (rol === 10) return <AdministratorPanelContainer />;
  else if (rol === 1) return <ClientContainerContainer />;
  else return <FiveZeroZero />;
};

HomeContainer.defaultProps = {};

export default HomeContainer;
